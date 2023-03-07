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
    const {username} = req.query
    const command = "SELECT password FROM bytes where username=$1"
    const user = await db.query(command, [username])
    if (user?.rows == null) return next({
        message:`/controllers/bcryptController comparePassowrd error`,
        status: 400,
        log: 'server error check server log'
      })
    try { 
      if (await bcrypt.compare(req.body.password, user.rows[0].password)) {
        res.locals.response = true;
        return next()
      }else {
        res.locals.response = false;
        return next()
      }
    }catch(err) {
      const error:T.error = {
        message:`/controllers/bcryptController comparePassowrd error ${typeof err === 'object' ? JSON.stringify(err) : err}`,
        status: 400,
        log: 'server error check server log'
      }
      return next(error)
    }
  }
}