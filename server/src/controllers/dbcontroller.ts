import db from '../models/userModels'
import { Request, Response, NextFunction } from 'express'
export default {
  getUser: async (req: Request,res: Response, next: NextFunction):Promise<any> => {
    try {
      const {username} = req.body
      const command = "SELECT * FROM user WHERE username=$1"
      const user = await db.query(command, [username])
    }catch(err:any) {

    }
  },
  createUser: (req: Request, res: Response, next: NextFunction) => {
      
  },
  getHash: async (req: Request, res: Response, next: NextFunction) => {
      const { username } = req.body;
      const query = "SELECT password FROM WHERE username = $1;";
      db.query(query,[username])
  },
}