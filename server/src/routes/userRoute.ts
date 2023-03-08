import { Router, Request, Response } from 'express';
import dbcontroller from '../controllers/dbcontroller';

const router = Router();

router.get('/getUser', dbcontroller.getUser, (req:Request,res:Response) => {
    return res.json(res.locals.user);
  })

router.get('/getUsers/:username', dbcontroller.getUsers, (req:Request,res:Response) => {
    return res.json(res.locals.users);
  })

export default router