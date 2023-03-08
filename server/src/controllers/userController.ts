import { Request, Response, NextFunction } from 'express';
import db from '../models/userModels'
import * as T from '../type'

export default {
    createUser: async (req: Request, res: Response, next: NextFunction):Promise<any> => {
    try {
      const { password } = res.locals
      const { username, email, skills_id, currproj,skills_wanted,linkedin,first_name,last_name,github }: T.user = req.body;
      const command: string = "INSERT INTO Bytes (username, email, password,currproj,skills_id,skills_wanted) VALUES ($1, $2, $3, $4, $5, $6);";
      await db.query(command, [username, email, password,currproj,skills_id,skills_wanted]);
      
      return next();
      }catch(err:any) {
        const error:T.error = {
        message:`/controllers/dbController createUser error ${err}`,
          status: 500,
          log: 'database error check server log'
        }
        return next(error)
      }   
    }
}