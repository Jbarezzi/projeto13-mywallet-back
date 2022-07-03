import { Router } from "express";
import { signUp, login } from "./../controllers/userController.js";
import { validateSignUp } from "../middlewares/joiValidations.js";

const router = Router();

router.post("/register", validateSignUp, signUp);
router.post("/login", login);

export default router;