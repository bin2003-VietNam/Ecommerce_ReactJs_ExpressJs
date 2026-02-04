import pool from '../config/database_mysql.js';


export const submitOrder = async (req, res) => {
  res.json({
    message: "submitOrder successfully"
  });
};

export const getAllOrder = async (req, res) => {
  res.json({
    message: "getAllOrder successfully"
  });
};

export const getOrderById = async (req, res) => {
  const orderId = req.params.orderId;
  res.json({
    message: "getOrderById successfully",
    orderId: orderId
  });
};