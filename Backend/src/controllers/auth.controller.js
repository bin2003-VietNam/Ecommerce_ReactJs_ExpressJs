import pool from '../config/database_mysql.js';
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
  try {
    const { email, password, full_name } = req.body;
    console.log( req.body);
    
    // 1. validate
    if( !email || !password || !full_name ) {
      return res.status(400).json({
        message: "Missing required fields"
      })
    }
    // 2. check if user exists
    const [existUser] = await pool.query(`
      SELECT id 
      FROM users
      WHERE email=?
      `,[email])
    if(existUser.length>0){
      return res.status(409).json({
        message: "User already exists"
      })
    }
    // 3. hash password
    const passwordHash = await bcrypt.hash(password, 10);
    // 4. insert to db
    await pool.query(`
      INSERT INTO users(email, password_hash, full_name, role)
      VALUE(?,?,?, 'user')
      `,[email, passwordHash, full_name])
    // 5. respond
    return res.status(201).json({
      message: "User registered successfully"
    })
  } catch (error) {
    console.error('Register error:', error);
    return res.status(500).json({
      message: 'Server error'
    });
  }
};

export const login = async (req, res) => {
  res.json({
    message: "Login success"
  });
};

export const checkAuth = async (req, res) => {
  // sau này: verify JWT ở đây
  res.json({
    message: "CheckAuth success"
  });
};

export const logout = async (req, res) => {
  res.json({
    message: "Logout success"
  });
};
