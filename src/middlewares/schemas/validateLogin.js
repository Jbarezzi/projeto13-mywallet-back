import Joi from "joi";
import validateWithJoi from "../validateWithJoi.js";

export default function validateLogin(req, res, next) {
    const loginSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });

    validateWithJoi(loginSchema, req.body, res, next);
}