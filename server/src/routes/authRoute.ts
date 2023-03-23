import session from 'express-session';
import { Router, Request, Response } from 'express';
import bcryptController from '../controllers/bcryptController';
import userController from '../controllers/userController';
import * as T from '../type';

const router = Router();

declare module 'express-session' {
  interface SessionData {
    user?: T.user,
    authenticated?: boolean
  }
}


router.use(session({
  secret: 'bytebuddies',
  cookie: {maxAge: 6000},
  rolling: true,
  resave: true,
  saveUninitialized: false,
}))

router.post('/login', bcryptController.login, (req:Request,res:Response) => {
  return res.json(res.locals.permission);
})


router.post('/signup', bcryptController.hashPassword, userController.createUser, (req:Request , res:Response):any => {
  return res.status(200).json('User Created')
})

// router.use(bcryptController.authenticate)
export default router