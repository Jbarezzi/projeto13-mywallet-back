import { db, objectId } from "./../database/mongo.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

export async function signUp(req, res) {
    const newUser = req.body;
    const isUserRegistered = await db.collection("users").findOne({ email: newUser.email });

    if(isUserRegistered) {
        res.status(409).send("Esse email já está cadastrado.");
        return;
    }

    const saltRounds = 10;
    newUser.password = bcrypt.hashSync(newUser.password, saltRounds);
    const inserted = await db.collection("users").insertOne(newUser)
    const wallet = { userId: inserted.insertedId, transactions: [] }
    await db.collection("wallets").insertOne(wallet);
    res.sendStatus(201);
}

export async function login(req, res) {
    const { email, password } = req.body;
    const isUserValid = await db.collection("users").findOne({ email });
    const isPasswordValid = await bcrypt.compare(password, isUserValid.password);
    if(isUserValid && isPasswordValid) {
        const session = {
            token: uuid(), 
            userId: isUserValid._id,
        };
        await db.collection("sessions").insertOne(session);
        res.status(201).send({ token: session.token });
    } else {
        res.status(401).send("Senha ou email incorretos!");
    }
}