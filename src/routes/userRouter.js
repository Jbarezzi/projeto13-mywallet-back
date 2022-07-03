import { Router } from "express";
import { signUp } from "./../controllers/userController";
import { validateSignUp } from "../middlewares/joiValidations";

const router = Router();

router.post("/register", validateSignUp, signUp);
router.post("/login", login);

export default userRouter;