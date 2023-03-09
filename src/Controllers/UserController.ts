import {Request,Response} from "express";
import { User } from "../Models/user";

export class UserController{
    private users: User[];

    constructor(){
        this.listUsers = this.listUsers.bind(this);

        this.users = [
            {id:1,firstName:"Tamás",lastName:"Simon"},
            {id:2,firstName:"Anett",lastName:"Simonné Bíró"},
            {id:3,firstName:"Laura",lastName:"Simon"},
            {id:4,firstName:"Kornél",lastName:"Simon"}
        ]
    }

    listUsers(req:Request,res:Response):any{
        res.setHeader('Content-Type','application/json');
        res.status(200).send(this.users);
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