import {Request, Response} from "express";

export class MonsterController{
    constructor() {
        
    }

    async listMonsters(req:Request,res:Response):Promise<Response>{
        throw "not implemented";
    }

    async createMonster(req:Request,res:Response):Promise<Response>{
        throw "not implemented"
    }

    async readMonster(req:Request,res:Response):Promise<Response>{
        throw "not implemented"
    }

    async updateMonster(req:Request,res:Response):Promise<Response>{
        throw "not implemented"
    }

    async deleteMonster(req:Request,res:Response):Promise<Response>{
        throw "not implemented"
    }

}