import {Request,Response} from "express";

export class UserController{

    constructor(){
        this.listUsers = this.listUsers.bind(this);

       
    }

    listUsers(req:Request,res:Response):any{
        res.setHeader('Content-Type','application/json');
        res.status(501);
    }

    createUser(req:Request,res:Response):any{
        res.status(501);
    }

    readUser(req:Request,res:Response):any{
        res.status(501);
    }

    updateUser(req:Request,res:Response):any{
        res.status(501);
    }

    deleteUser(req:Request,res:Response):any{
        res.status(501);
    }
}