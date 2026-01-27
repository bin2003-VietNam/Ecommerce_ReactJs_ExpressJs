import express from "express";
import {
  register,
  login,
  checkAuth,
  logout
} from "../controllers/auth.controller.js";

const router = express.Router();

// ===== AUTH ROUTES =====
router.post("/register", register);
router.post("/login", login);
router.post("/me", checkAuth);
router.post("/logout", logout);

export default router;
