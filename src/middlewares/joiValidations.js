import Joi from "joi";

export async function validateSignUp(req, res) {
    const newUser = req.body;

    const signUpSchema = Joi.object({
        name: Joi.string().trim().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });

    try {
        await signUpSchema.validateAsync(newUser);
        next();
    } catch(error) {
        res.status(422).send();
    }
}

