import Joi from "joi";
import validate from "./../validate.js";

export default function validateSignUp(req, res, next) {
    const signUpSchema = Joi.object({
        name: Joi.string().trim().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });

    validate(signUpSchema, req.body, res, next);
}
