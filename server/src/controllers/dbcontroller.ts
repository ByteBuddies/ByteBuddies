import { Request, Response, NextFunction } from 'express'
import db from '../models/userModels'
import * as T from '../type'

export default {
  getHash: async (req: Request, res: Response, next: NextFunction):Promise<any> => {
    try {
      const { username } = req.body;
      const query = "SELECT password FROM bytes WHERE username = $1;";
      const password = await db.query(query,[username])
      res.locals.passowrd = password;
      return next();
    }catch(err) {
      const error:T.error = {
        message:`/controllers/dbController getHash error ${typeof err === 'object' ? JSON.stringify(err) : err}`,
        status: 500,
        log: 'database error check server log'
      }
      return next(error)
    }
  }
}