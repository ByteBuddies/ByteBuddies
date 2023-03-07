import db from '../models/userModels'
import bcrypt from 'bcrypt'
import * as T from '../type'

export const login = async (email:string, password:string):Promise<T.user | string> => {

  const command = "SELECT * FROM bytes where email=$1"
  const user = await db.query(command, [email]).rows[0]

  try { 
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