import {Request, Response} from "express";

export class ChoiceController{
    constructor() {
        
    }

    async listChoices(req:Request,res:Response):Promise<Response>{
        throw "not implemented";
    }

    async createChoice(req:Request,res:Response):Promise<Response>{
        throw "not implemented"
    }

    async readChoice(req:Request,res:Response):Promise<Response>{
        throw "not implemented"
    }

    async updateChoice(req:Request,res:Response):Promise<Response>{
        throw "not implemented"
    }

    async deleteChoice(req:Request,res:Response):Promise<Response>{
        throw "not implemented"
    }

}