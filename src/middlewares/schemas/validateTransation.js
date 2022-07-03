import Joi from "joi";
import validateWithJoi from "../validateWithJoi.js";

export default function validateTransaction(req, res, next) {
    const type = req.params.type;

    if(type === "income") {
        const incomeSchema = Joi.object({
            value: Joi.number().positive().required(),
            description: Joi.string().trim().required(),
        });

        validateWithJoi(incomeSchema, req.body, res, next);
    }

    if(type === "expenses") {
        const expensesSchema = Joi.object({
            value: Joi.number().negative().required(),
            description: Joi.string().trim().required(),
        });

        validateWithJoi(expensesSchema, req.body, res, next);
    }
}