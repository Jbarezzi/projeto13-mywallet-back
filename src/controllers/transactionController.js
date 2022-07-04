import { db } from "../database/mongo.js";
import dayjs from "dayjs";

export async function getUserWallet(req, res) {
    const userId = res.locals.session;

    const wallet = await db.collection("wallets").findOne(userId);
    const transactions = wallet?.transactions;
    res.send(transactions);
}

export async function createTransaction(req, res) {
    const userId = res.locals.session;
    const transaction = {
        value: req.body.value,
        description: req.body.description,
        date: dayjs().format("DD/MM"),
    };
    await db.collection("wallets").updateOne({ userId }, { $push: { transactions: transaction } });
    res.sendStatus(201);
}