import express from "express";
import {
    getUserProfile,
    updateUserProfile,
    updateUserPassword,
    getUserOrder
} from "../controllers/user.controller.js";

const router = express.Router();

// ===== USER ROUTES =====
router.get("/profile", getUserProfile);
router.put("/profile", updateUserProfile);
router.put("/password", updateUserPassword);
router.get("/order", getUserOrder);

export default router;