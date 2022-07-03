import Joi from "joi";
import validateWithJoi from "../validateWithJoi.js";

export default function validateSignUp(req, res, next) {
    const signUpSchema = Joi.object({
        name: Joi.string().trim().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });

    validateWithJoi(signUpSchema, req.body, res, next);
}
