import { Request, Response, NextFunction } from 'express';
import db from '../models/userModels';
import * as T from '../type';

export default {
    getUser: async (req: Request,res: Response, next: NextFunction):Promise<any> => {
      try {
        const { username } = req.body;
        const command:string = "SELECT * FROM bytes b WHERE b.username=$1;"
          const user = await db.query(command, [username]);
        res.locals.user = user.rows[0];
        return next()
      }catch(err:any) {
          const error:T.error = {
          message:`/controllers/dbController getUser error ${err}`,
          status: 500,
          log: 'database error check server log'
        }
        return next(error);
      }
    },
    getUsers: async (req: Request,res: Response, next: NextFunction):Promise<any> => {
        try {
            const { username } = req.params;
            
          const command:string = `SELECT username,skills_id,skills_wanted,currproj,email FROM bytes WHERE username!= $1;`
            const users = await db.query(command, [username]);
          res.locals.users = users.rows;
          return next()
        }catch(err:any) {
            const error:T.error = {
            message:`/controllers/dbController getUser error ${err}`,
            status: 500,
            log: 'database error check server log'
          }
          return next(error);
        }
      },

}