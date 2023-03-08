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
  cookie: {maxAge: 6000},
  rolling: true,
  resave: true,
  saveUninitialized: false,
}))

router.post('/api/login', bcryptController.login, (req,res) => {
  return res.redirect('http://localhost:8080/main')
})


router.post('/api/signup', bcryptController.hashPassword, userController.createUser, (req:Request , res:Response):any => {
  return res.json('created')
})

router.use(bcryptController.authenticate)

router.use((req:Request, res:Response)=>{

  res.json(req.session.cookie)
})
export default router