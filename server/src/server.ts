import express from "express";
const app = express()
const PORT:number = 3000

app.use(express.json())

app.get('/api', (req,res)=> {
  res.json("hello")
})

app.listen(PORT, ()=> [
  console.log(`listening to ${PORT}...`)
])