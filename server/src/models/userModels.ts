import { Pool } from 'pg'
import key from '../../keys'
const {connectionString} = key;

console.log(connectionString)
const pool = new Pool({
    connectionString
});
const db = {
  query: (text:string, params:any[], callback?:(...args:any[])=>void):any => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
}

export default db;