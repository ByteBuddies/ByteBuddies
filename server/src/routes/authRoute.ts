import session from 'express-session'
import {Router} from 'express'
import bcryptController from '../controllers/bcryptController'
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

export default router