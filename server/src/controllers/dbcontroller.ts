import { Request, Response, NextFunction } from 'express';
import db from 'server/src/models/userModels';
module.exports = {
    createUser: (req: Request, res: Response, next: NextFunction) => {
        
    },
    getHash: async (req: Request, res: Response, next: NextFunction) => {
        const { username } = req.body;
        const query = "SELECT password FROM WHERE username = $1;";
        db.query(query,username)
    },
}