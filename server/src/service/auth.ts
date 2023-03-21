import db from '../models/userModels'
import bcrypt from 'bcrypt'
import * as T from '../type'

export const login = async (email:string, password:string):Promise<T.user | string> => {

  const command = "SELECT * FROM bytes where email=$1"
  try { 
    let user = await db.query(command, [email])
    console.log(user.rows)
    if (user.rows.length === 0 ) {
      console.log('src/service/auth error ')
      return Promise.reject('user not found')
    }else {
      user = user.rows[0]
    }
    if (await bcrypt.compare(password, user.password)) {
      return {username: user.username, email: user.email, profile_id: user.profile_id}
    }else {
      return Promise.reject("incorrect password")
    }
  }catch(err) {
    console.log('src/service/auth',err)
    return Promise.reject("user not found")
  }
}
export const hash = async (body:T.user):Promise<T.user> => {
  
  const {username, password, email} = body
  if (!username || !password || !email) {
    return Promise.reject("incorrect input")
  }

  try{
    const salt = await bcrypt.genSalt(3);
    const hashedPassword = await bcrypt.hash(password, salt);
    return {username: username, password: hashedPassword, email: email};
  }catch(err){
    return err
  }
}