import { db } from "../database/mongo.js";

export async function getUserWallet(req, res) {
    const { userId } = req.locals.session;

    const wallet = await db.collection("wallets").findOne(userId);
    res.send(wallet.transactions);
}

export async function createTransaction(req, res) {
    
}