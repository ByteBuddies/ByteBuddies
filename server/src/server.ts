import express,{NextFunction, Request,Response} from 'express';
import bcryptController from './controllers/bcryptController';
import apiRouter from './routes/apiRoute'
import authRouter from './routes/authRoute'
import {error} from './type'
const app = express()
const PORT:number = 3000


app.use(express.json())
app.use(authRouter);

app.use(bcryptController.authenticate)

app.use('/api', apiRouter)

app.use((err:any, req: Request ,res:Response,next: NextFunction)=> {
  const error: error = {
        message:`Global Express Error Handler`,
        status: 400,
        log: 'express error check the server log'
      }
  err = Object.assign({}, error, err)
  res.status(err.status).send(err)

})

app.listen(PORT, ()=> [
  console.log(`listening to ${PORT}...`)
])