import { db } from "../database/mongo.js";

export default async function validateUserToken(req, res, next) {
    const { authorization } = req.headers;

    const token = authorization?.replace('Bearer ', '');
    
    if(!token) {
        return res.sendStatus(401)
    }
    
    const isTokenValid = await db.collection("sessions").findOne({ token });

    if(!isTokenValid) {
        return res.sendStatus(401);
    }

    res.locals.session = isTokenValid.userId;
    next();
}