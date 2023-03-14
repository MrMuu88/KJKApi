import { Request,Response,NextFunction } from "express-serve-static-core";

const ErrorHandlingMiddleware = (err:Error,req:Request, res:Response, next: NextFunction) => {
    console.log("errorhandling middleaware called");
    res.status(500).json(err).end();
    next();
}

export default ErrorHandlingMiddleware;