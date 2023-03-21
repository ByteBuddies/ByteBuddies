import { Request, Response, NextFunction } from 'express';
import db from '../models/userModels'
import {hash} from '../service/auth'
import * as T from '../type'

export default {
    createUser: async (req: Request, res: Response, next: NextFunction):Promise<any> => {
      try {
        res.locals.newUser = await hash(req.body)
        const command:string = "INSERT INTO Bytes (username, email, password, profile_id) VALUES ($1, $2, $3, '1' )"
        const {username, email, password}:T.user = res.locals.newUser;
        const response = await db.query(command, [username, email, password]);

        console.log("response",await response);
        
        return next();
      }catch(err:any) {
        console.log(err)
        const error:T.error = {
        message:`/controllers/dbController createUser error ${typeof err === 'object' ? JSON.stringify(err) : err}`,
          status: 500,
          log: 'database error check server log'
        }
        return next(error)
      }   
    },
    getUser: async (req: Request,res: Response, next: NextFunction):Promise<any> => {
      try {
        const {username} = req.body
        const command:string = "SELECT b.username, b.email p.* FROM bytes b INNER JOIN profile p ON p.profile_id=b.profile_id WHERE b.username=$1"
        const user = await db.query(command, [username])
        res.locals.user = user
        return next()
      }catch(err:any) {
          const error:T.error = {
          message:`/controllers/dbController getUser error ${typeof err === 'object' ? JSON.stringify(err) : err}`,
          status: 500,
          log: 'database error check server log'
        }
        return next(error);
      }
    }
}