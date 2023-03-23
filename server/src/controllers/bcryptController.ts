import { Request, Response, NextFunction } from "express" 
import * as T from '../type'
import bcrypt from 'bcrypt'
import db from '../models/userModels';

export default {
  async hashPassword(req: Request, res:Response, next:NextFunction):Promise<any> {
    const { password } = req.body;
    try{
      const salt = await bcrypt.genSalt(3);
      const hashedPassword = await bcrypt.hash(password, salt);
      res.locals.password = hashedPassword;
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
    const { email, username, password } = req.body;
    if (!email && !username|| !password) {
      return res.status(400).json(`incorrect input`) 
    } 
    try {
      if (req.session.authenticated) {
        return next();
      } else {
        let command;
        let hashPassword;
        if (email) {
          command = "SELECT password FROM bytes WHERE email = $1;";
          hashPassword = await db.query(command, [email])
        }
        if (username) {
          command = "SELECT password FROM bytes WHERE username = $1;";
          hashPassword = await db.query(command, [username]);
        }
        hashPassword = hashPassword.rows[0].password;

        let permission = await bcrypt.compare(password, hashPassword);
        res.locals.permission = permission;
        req.session.authenticated = true;
        return next()
      }
    }catch(err) {
      const error:T.error = {
        message:`/controllers/bcryptController login error ${err}`,
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
      req.session.regenerate((err)=> {
        if (err) {
          console.log(err)
        }else {
          console.log('session regenerated')
        }
      })
    }
    return next()
  }
}