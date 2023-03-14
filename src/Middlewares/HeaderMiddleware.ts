import { Request, Response,NextFunction } from "express-serve-static-core"

const HeaderMiddleware = (req:Request,res:Response,next:NextFunction)=>{
    console.log("header setter called");
    res.setHeader("Content-Type","application/json");
    next();
}

export default HeaderMiddleware;