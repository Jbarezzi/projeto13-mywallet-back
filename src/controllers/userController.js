import { db } from "./../database/mongo.js";
import bcrypt from "bcrypt";

export async function signUp(req, res) {
    const newUser = req.body;
    const isUserRegistered = await db.collection("users").findOne({ email: newUser.email });
    if(isUserRegistered) {
        res.status(409).send("Esse email já está cadastrado.");
        return;
    }
    const saltRounds = 10;
    newUser.password = bcrypt.hashSync(newUser.password, saltRounds);
    await db.collection("users").insertOne(newUser)
    res.sendStatus(201);
}