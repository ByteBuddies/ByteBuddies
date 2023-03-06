import express,{Request,Response, NextFunction} from 'express';
const app = express()
const PORT:number = 3000

app.use(express.json())

app.get('/api', (req:Request,res:Response)=> {
  res.json("hello")
})

app.listen(PORT, ()=> [
  console.log(`listening to ${PORT}...`)
])