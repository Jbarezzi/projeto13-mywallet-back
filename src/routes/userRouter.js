import { Router } from "express";
import { signUp, login } from "./../controllers/userController.js";
import validateSignUp from "../middlewares/schemas/validateSignUp.js";
import validateLogin from "../middlewares/schemas/validateLogin.js";

const router = Router();

router.post("/register", validateSignUp, signUp);
router.post("/login",validateLogin, login);

export default router;