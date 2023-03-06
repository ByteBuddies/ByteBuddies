import { Pool } from 'pg'
import key from '../../keys'
const {connectionString} = key;

console.log(connectionString)
const pool = new Pool({
    connectionString
});

module.exports = {
    query: (text:string, params:any[], callback:(...args:any[])=>void) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
}
