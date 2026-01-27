export const register = async (req, res) => {
  res.json({
    message: "Register success"
  });
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
