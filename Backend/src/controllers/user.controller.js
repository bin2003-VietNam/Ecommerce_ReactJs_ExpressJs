import pool from '../config/database_mysql.js';

export const getUserProfile = async (req, res) => {
  // token jwt decode -> req.userId
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
  res.json({
    message: "updateUserProfile success"
  });
};

export const updateUserPassword = async (req, res) => {
  res.json({
    message: "updateUserPassword success"
  });
};

export const getUserOrder = async (req, res) => {
  res.json({
    message: "getOrder success"
  });
};