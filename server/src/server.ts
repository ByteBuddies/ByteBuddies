import express,{NextFunction, Request,Response} from 'express';
import authRouter from './routes/authRoute';
import { error } from './type';
import cors from 'cors';

const app = express();
const PORT: number = 3000;

app.use(cors({ origin: 'http://localhost:8080' }));
app.use(express.json());

app.use('/auth',authRouter);


app.use((err:error, req: Request ,res:Response,next: NextFunction)=> {
  const error: error = {
        message:`Global Express Error Handler`,
        status: 400,
        log: 'express error check the server log'
      }
  console.log(err)
  err = Object.assign({}, error, err)
  res.status(err.status).send(err.log)

})

app.listen(PORT, ()=> [
  console.log(`listening to ${PORT}...`)
])