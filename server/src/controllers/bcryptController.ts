import { Request, Response, NextFunction } from "express" 
import * as T from '../type'
import bcrypt from 'bcrypt'
import db from '../models/userModels' 
import {login} from '../service/auth'

export default {
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
      req.session.regenerate((err)=> {
        if (err) {
          console.log(err)
        }else {
          console.log('session regenerated')
        }
      })
    }
    console.log(req.session)
    return next()
  }
}