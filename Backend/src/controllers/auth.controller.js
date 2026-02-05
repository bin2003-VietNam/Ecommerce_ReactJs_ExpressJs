import pool from '../config/database_mysql.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  const { email, password, full_name } = req.body;
  try {    
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
  const { email, password } = req.body;  
  // 1. check email 
  try{
    const [rows] = await pool.query(`
      SELECT id, password_hash
      FROM users
      WHERE email=?
      `,[email])
    if(rows.length===0)
      return res.status(401).json({
        message: "Invalid email"
      })

  // 2. compare password
    const isPasswordValid = await bcrypt.compare(password, rows[0].password_hash)
    if(!isPasswordValid){
      return res.status(401).json({ 
        message: "Invalid password"
      })
    }else{
  // 3. generate JWT token
      const payload = {
        userId: rows[0].id,
      }
      const token = jwt.sign(payload, process.env.JWT_SECRET,{
        expiresIn: '1h'
      })
  // 4. respond with token
      res
        .cookie('access_token', token,{
          httpOnly: true,
          secure: false,
          sameSite: 'lax',
          maxAge: 3600000 ,
          domain: 'localhost'
        })      
        .json({
          message: "Login success",
          token: token
        })
    }
  }catch(error){
    console.error('Login error:', error);
    return res.status(500).json({
      message: 'Server error'
    });
  }

};

export const checkAuth = async (req, res) => {
  // sau này: verify JWT ở đây
  res.json({
    message: "CheckAuth success"
  });
};

export const logout = async (req, res) => {
  res
    .clearCookie('access_token')
    .json({ message: 'Logout is success' });
};
