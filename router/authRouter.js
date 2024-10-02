import { Router } from "express";
const router = Router();
import { login, register } from "../controllers/authController.js";

// Register and login routes
router.post("/register", register);
router.post("/login", login);

export default router;
