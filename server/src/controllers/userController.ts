import { Request, Response, NextFunction } from 'express';
import * as T from '../type'
import db from '../models/userModels'
module.exports = {
    createUser: (req: Request, res: Response, next: NextFunction) => {
        try {
          const command:string = "INSERT INTO bytes ($1, $2, $3)"
          const {username, email, password}:T.user = res.locals.newUser
        }catch(err:any) {
          const error:T.error = {
          message:`/controllers/dbController createUser error ${typeof err === 'object' ? JSON.stringify(err) : err}`,
            status: 500,
            log: 'database error check server log'
          }
          return next(error)
        }   
      },
    verifyUser: (req: Request, res: Response, next: NextFunction) => {
        
    },
    getUser: async (req: Request,res: Response, next: NextFunction):Promise<any> => {
        try {
          const {username} = req.body
          const command:string = "SELECT b.username, p. FROM bytes b INNER JOIN profile p ON p.profile_id=b.profile_id WHERE username=$1"
          const user = await db.query(command, [username])
          res.locals.user = user
        }catch(err:any) {
           const error:T.error = {
            message:`/controllers/dbController getUser error ${typeof err === 'object' ? JSON.stringify(err) : err}`,
            status: 500,
            log: 'database error check server log'
          }
          return next(error)
        }
    }
}