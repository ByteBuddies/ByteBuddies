import query from '../models/userModels'
import { Request, Response, NextFunction } from 'express'
export default {
  getUser: async (req: Request,res: Response, next: NextFunction):Promise<any> => {
    try {
      const {username} = req.body
      const command = "SELECT * FROM user WHERE username=$1"
      const user = await query(command, [username])
    }catch(err:any) {

    }
  }
}