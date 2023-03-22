import { Request, Response,NextFunction } from "express-serve-static-core"

var reqid :number = 0;

const HeaderMiddleware = (req:Request,res:Response,next:NextFunction)=>{
    reqid++;
    console.log( `request[${reqid}]: ${req.method} ${req.url}`);
    res.setHeader("Content-Type","application/json");
    next();
    console.log(`request[${reqid}] responded: ${res.statusCode}`);
}

export default HeaderMiddleware;