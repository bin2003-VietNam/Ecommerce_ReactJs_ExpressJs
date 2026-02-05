import pool from '../config/database_mysql.js';
import bcrypt from 'bcrypt';

export const getUserProfile = async (req, res) => {
  const userId = req.user.userId;  
  try {
    const [rows] = await pool.query(`
      SELECT email,full_name
      FROM users
      WHERE id=?
      `,[userId])
    if(rows.length===0){
      return res.status(401).json({
        message: "user not exist"
      })
    }
    res.status(200).json(rows[0])
  } catch (error) {
    res.status(500).json({
      message: "error: " + error
    })
  }
};

export const updateUserProfile = async (req, res) => {
  const userId = req.user.userId;  
  const { email, full_name } = req.body;
  try {
    const [rows] = await pool.query(`
      UPDATE users
      SET email=?, full_name=?
      WHERE id=?
      `,[email,full_name,userId])
    if(rows.affectedRows ===0){
      return res.status(401).json({
        message: "user not found"
      })
    }
    res.status(200).json({
      message: "update successfully"
    })
  } catch (error) {
    res.status(500).json({
      message: "error: " + error
    })
  } 
};

export const updateUserPassword = async (req, res) => {
  const userId = req.user.userId;  
  const { password } = req.body;
  const password_hashed = await bcrypt.hash(password, 10)
  try {
    const [rows] = await pool.query(`
      UPDATE users
      SET password_hash=?
      WHERE id=?
      `,[password_hashed,userId])
    if(rows.affectedRows ===0){
      return res.status(401).json({
        message: "user not found"
      })
    }
    res.status(200).json({
      message: "update successfully"
    })
  } catch (error) {
    res.status(500).json({
      message: "error: " + error
    })
  } 
};

export const getUserOrder = async (req, res) => {
  res.json({
    message: "getOrder success"
  });
};