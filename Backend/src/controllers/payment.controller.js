export const createPayment = async (req, res) => {
  const payment_method = req.query.payment_method;
  res.json({
    message: "createPayment successfully",
    payment_method: payment_method,
  });
};

export const checkPaymentStatus = async (req, res) => {
  const payment_id = req.query.payment_id;
  res.json({
    message: "checkPaymentStatus successfully",
    payment_id: payment_id,
  });
};