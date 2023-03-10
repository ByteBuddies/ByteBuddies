import { Request, Response, NextFunction } from 'express';
import db from '../models/userModels'
import * as T from '../type'

export default {
    createUser: async (req: Request, res: Response, next: NextFunction):Promise<any> => {
    try {
      const { password } = res.locals
      const { username, email, skills_id, currproj,skills_wanted }: T.user = req.body;
      const command: string = "INSERT INTO Bytes (username, email, password,currproj,skills_id,skills_wanted) VALUES ($1, $2, $3, $4, $5, $6);";
      await db.query(command, [username, email, password,currproj,skills_id,skills_wanted]);

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
        const { username } = req.body;
        const command:string = "SELECT * FROM bytes b WHERE b.username=$1;"
        const user = await db.query(command, [username]);
        res.locals.user = user;
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