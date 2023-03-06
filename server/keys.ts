import path from 'path'
import * as dotenv from 'dotenv'
import * as T from './type'  
dotenv.config({path: path.resolve(__dirname, '../.env')})

const key:T.env = {
  connectionString: process.env.connectionString as string
}
export default key