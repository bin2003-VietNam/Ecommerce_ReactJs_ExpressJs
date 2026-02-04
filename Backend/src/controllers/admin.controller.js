import pool from '../config/database_mysql.js';


export const getAllOrder = async (req, res) => {
  res.json({
    message: "getAllOrder successfully",
  });
};

export const changeOrderStatus = async (req, res) => {
  const orderId = req.query.OrderId;
  res.json({
    message: `changeOrderStatus  successfully`,
    orderId: orderId,
  });
};

export const getRevenueByDay = async (req, res) => {
  const type = req.query.type;
  res.json({
    message: `getRevenueByDay successfully`,
    type: type,
  });
};

export const getRevenueByMonth = async (req, res) => {
  const type = req.query.type;
  res.json({
    message: `getRevenueByMonth successfully`,
    type: type,
  });
};
