import {Request,Response} from "express";
import { User } from "../Models/user";

export class UserController{

    constructor(){
        this.listUsers = this.listUsers.bind(this);

       
    }

     async listUsers(req:Request,res:Response):Promise<Response>{
        res.setHeader('Content-Type','application/json');
        const users = await User.findAll();
        return res.status(200).json(users);
    }

    async createUser(req:Request,res:Response):Promise<Response>{
        var user = <User>req.body;
        user.id = 0; // mariadb has identity insert on by default
        user = await User.create({...user});
        return res.status(201).json(user);
    }

    async readUser(req:Request,res:Response):Promise<Response>{
        const {id} = req.params;
        const user: User |null = await User.findByPk(id);

        if(user !== null)
            return res.status(200).json(user);
        else
            return res.status(404).end();
    }

    async updateUser(req:Request,res:Response):Promise<Response>{
        const {id} = req.params;
        const user = <User> req.body;
        user.id = Number(id);

        await User.update({...user},{where: {id}});
        
        const updatedUser :User | null = await User.findByPk(id);
        if(updatedUser !== null)
            return res.status(200).json(updatedUser);
        else
            return res.status(404).end();
            
    }

    async deleteUser(req:Request,res:Response):Promise<Response>{
        const {id} = req.params;
        const deleteUser : User | null = await User.findByPk(id);
        if(deleteUser !== null){
            await User.destroy({where:{id}});
            return res.status(200).json(deleteUser);
        }
        else{
            return res.status(404).end();
        }
    }
}