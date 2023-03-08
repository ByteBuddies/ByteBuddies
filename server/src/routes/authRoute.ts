import session from 'express-session'
import {Router, Request, Response} from 'express'
import bcryptController from '../controllers/bcryptController'
import userController from '../controllers/userController'
import * as T from '../type'
const router = Router()

declare module 'express-session' {
  interface SessionData {
    user?: T.user,
    authenticated?: boolean
  }
}


router.use(session({
  secret: 'bytebuddies',
  cookie: {maxAge: 10000},
  resave: true,
  saveUninitialized: false,
}))

router.post('/login', bcryptController.login, (req,res) => {
  return res.json("login success")
})

router.post('/signup', bcryptController.hashPassword, userController.createUser, (req:Request , res:Response):any => {
  return res.json('created')
})
export default router