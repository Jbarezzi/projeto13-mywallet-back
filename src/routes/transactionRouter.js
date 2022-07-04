import { Router } from "express";
import { createTransaction, getUserWallet } from "./../controllers/transactionController.js";
import validateUserToken from "./../middlewares/validateUserToken.js";
import validateTransaction from "../middlewares/schemas/validateTransation.js";

const router = Router();

router.get("/wallet", validateUserToken, getUserWallet);
router.post("/wallet/new-transaction/:type", validateUserToken, validateTransaction, createTransaction);

export default router;