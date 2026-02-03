export const getCart = async (req, res) => {
  res.json({
    message: "getCart successfully"
  });
};

export const addItemToCart = async (req, res) => {
  res.json({
    message: "addItemToCart successfully"
  });
};

export const changeItemToCart = async (req, res) => {
  const itemId = req.params.itemId;
  res.json({
    message: "getCart successfully",
    itemId: itemId
  });
};

export const deleteItemInCart = async (req, res) => {
  const itemId = req.params.itemId;
  res.json({
    message: "deleteItemInCart successfully",
    itemId: itemId
  });
};