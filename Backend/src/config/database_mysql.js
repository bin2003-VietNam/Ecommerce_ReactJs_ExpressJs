import mysql from 'mysql2'

const pool =  mysql.createPool({
      host: process.env.HOST || '127.0.0.1',
      user: process.env.USER || 'root',
      password: process.env.PASSWORD || 'binkich',
      database: process.env.DATABASE || 'mysql_db',
    }).promise(); 

export default pool;

