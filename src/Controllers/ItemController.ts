import {Request, Response} from "express";

export class ItemController{
    constructor() {
        
    }

    async listItems(req:Request,res:Response):Promise<Response>{
        throw "not implemented";
    }

    async createItem(req:Request,res:Response):Promise<Response>{
        throw "not implemented"
    }

    async readItem(req:Request,res:Response):Promise<Response>{
        throw "not implemented"
    }

    async updateItem(req:Request,res:Response):Promise<Response>{
        throw "not implemented"
    }

    async deleteItem(req:Request,res:Response):Promise<Response>{
        throw "not implemented"
    }

}