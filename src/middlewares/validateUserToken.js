import { db } from "../database/mongo.js";

export default async function validateUserToken(req, res, next) {
    const { authorization } = req.headers;

    const token = authorization?.replace('Bearer ', '');
    const isTokenValid = await db.collection("sessions").findOne(token);

    if(isTokenValid) {
        req.locals.session = isTokenValid.userId;
        next();
    }

    res.sendStatus(401);
}