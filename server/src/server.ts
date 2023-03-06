import express from "express";
const app = express()
const PORT:number = 3000

app.get('/', (req,res)=> {
  res.send("hello")
})

app.listen(PORT, ()=> [
  console.log(`listening to ${PORT}...`)
])