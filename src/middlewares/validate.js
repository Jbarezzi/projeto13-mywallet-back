export default async function validate(schema, target, res, next) {
    try {
        await schema.validateAsync(target, { abortEarly: false });
        next();
    } catch(error) {
        const errors = error.details.map(detail => detail.message);
        res.status(422).send(errors);
    }
}

