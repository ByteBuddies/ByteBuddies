import Exprees,{ Request, Response, NextFunction } from "express" 
import * as T from '../type'
import bcrypt from 'bcrypt'
import db from '../models/userModels' 

export default {
  async hashPassword(req: Request, res:Response, next:NextFunction):Promise<any> {
    const {username, password, email} = req.body
    try{
      const salt = await bcrypt.genSalt();
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
  async comparePasssword(req:Request, res:Response, next:NextFunction):Promise<any> {

    const user = db.query
  }
}