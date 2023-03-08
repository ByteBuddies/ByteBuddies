import { Request, Response, NextFunction } from "express" 
import * as T from '../type'
import bcrypt from 'bcrypt'
import db from '../models/userModels' 
import {login} from '../service/auth'

export default {
  async hashPassword(req: Request, res:Response, next:NextFunction):Promise<any> {
    const {username, password, email} = req.body
    try{
      const salt = await bcrypt.genSalt(3);
      const hashedPassword = await bcrypt.hash(password, salt);
      res.locals.newUser = {username: username, password: hashedPassword, email: email};
      return next()
    }catch(err) {
      const error:T.error = {
        message:`/controllers/bcryptController hashPassword error ${typeof err === 'object' ? JSON.stringify(err) : err}`,
        status: 400,
        log: 'server error check server log'
      }
      return next(error);
    }
  },
  async login(req:Request, res:Response, next:NextFunction):Promise<any> {
    const {email, password} = req.body
    if (!email || !password) {
      return res.status(400).json('incorrect input') 
    } 
    try {
      if (req.session.authenticated) {
        console.log('here')
      }else {
        const user = await login(email, password)
        // const user = {username: 'timothy', email:email}
        req.session.authenticated = true;
        req.session.user = user as T.user;
        return next()
      }
    }catch(err) {
      const error:T.error = {
        message:`/controllers/bcryptController login error ${typeof err === 'object' ? JSON.stringify(err) : err}`,
        status: 400,
        log: 'server error check server log'
      }
      return next(error)
    }
  },
  authenticate(req:Request, res:Response, next:NextFunction) {
    if (!req.session || !req.session.user) {
      const err:T.error = {
        message:`/controllers/bcryptController authentication error`,
        status: 400,
        log: 'server error check server log'
      }
      return next(err)
    }else {
      const currentMaxAge = req.session.cookie.maxAge;
  
      // Set the new max age for the cookie (in milliseconds)
      req.session.cookie.maxAge = currentMaxAge + (5 * 1000);

      req.session.save((err) => {
        if (err) {
          console.error('Error refreshing session cookie:', err);
          res.status(500).send('Error refreshing session cookie');
        } else {
          res.send('Session cookie refreshed');
        }
      });
    }
  }
}