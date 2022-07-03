import Joi from "joi";
import validate from "./../validate.js";

export default function validateLogin(req, res, next) {
    const loginSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });

    validate(loginSchema, req.body, res, next);
}