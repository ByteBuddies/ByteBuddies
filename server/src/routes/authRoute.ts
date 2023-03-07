import session from 'express-session'
import {Router} from 'express'
import bcryptController from '../controllers/bcryptController'
const router = Router()

router.post('/login', bcryptController.login)

router.use(session({
  secret: 'bytebuddies',
  cookie: {maxAge: 300000},
  resave: true,
  saveUninitialized: false
}))


export default router