import { RequestHandler } from "express";
import { plainToInstance } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { sanitize, Trim } from "class-sanitizer";

function validacionUsuarioMiddleware(type: any, skipMissingProperties = false): RequestHandler {

    return (req, res, next) => {
        const dtoObj = plainToInstance(type, req.body);
        validate(dtoObj, { skipMissingProperties }).then(
            (errors: ValidationError[]) => {
                if (errors.length > 0) {
                    const dtoErrors = errors.map((error: ValidationError) =>
                        (Object as any).values(error.constraints)).join(", ");
                    res.status(400).send({ error: dtoErrors });
                } else {
                    sanitize(dtoObj);
                    req.body = dtoObj;
                    next();
                }
            }
        );
    };
}

export default validacionUsuarioMiddleware;