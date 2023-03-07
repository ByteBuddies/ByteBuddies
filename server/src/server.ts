import express from "express";
import passport from 'passport'

const cookieSession = require('cookie-session');
require('./passport')

const app = express()
const PORT:number = 3000

app.use(express.json())

app.use(cookieSession({
  name: 'github-auth-session',
  keys: ['key1', 'key2']
}))
app.use(passport.initialize());
app.use(passport.session());

app.get('/api', (req,res)=> {
  res.json("hello")
})

app.get('/auth/error', (req, res) => res.send('Unknown Error'))

app.get('/auth/github',passport.authenticate('github',{ scope: [ 'user:email' ] }));

app.get('/auth/github/callback',passport.authenticate('github', { 
  failureRedirect: '/auth/error' }),
function(req, res) {
  res.redirect('http://localhost:8080/main');
});

app.listen(PORT, ()=> [
  console.log(`listening to ${PORT}...`)
])