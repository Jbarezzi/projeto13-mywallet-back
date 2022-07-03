import { Router } from "express";

const router = Router();

router.get("/wallet", validateUser, getUserWallet);
router.post("/wallet/new-transaction", validateUser, createTransaction);

export default router;