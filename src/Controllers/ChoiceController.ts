import {Request, Response} from "express";
import { stat } from "fs";
import { QueryTypes } from "sequelize";
import DbConnection from "../Database/DbConnection";
import { Choice } from "../Models/Choice";

export class ChoiceController{
    constructor() {
        
    }

    async listChoices(req:Request,res:Response):Promise<Response>{
        const pid = Number(req.params.pid);
        const dbResult: any[]  = await DbConnection.query(`SELECT id FROM Choices WHERE ParagraphId = ${pid};`, { type: QueryTypes.SELECT }) as any[];
        const result : number[] = dbResult.map(l => l.id) as number[];

        return res.status(200).json(result).end();
    }

    async createChoice(req:Request,res:Response):Promise<Response>{
        var newC = req.body as Choice;
        newC.paragraphId = Number(req.params.pid);
        newC.id = 0;

        newC = await Choice.create({...newC});

        return res.status(201).json(newC).end();
    }

    async readChoice(req:Request,res:Response):Promise<Response>{
        var cid = Number(req.params.cid);
        var choice = await Choice.findByPk(cid);
        if(choice !== null)
            return res.status(200).json(choice).end();
        else
            return res.status(404).end();
    }

    async updateChoice(req:Request,res:Response):Promise<Response>{
        var updateC = req.body as Choice;
        const cid = Number(req.params.cid);
        updateC.id = cid;

        const result = await Choice.update({...updateC},{where:{id:cid}});
        if(result[0] == 1)
            return res.status(200).json(updateC).end();
        else
            return res.status(404).end();
    }

    async deleteChoice(req:Request,res:Response):Promise<Response>{
        var cid = Number(req.params.cid);

        await Choice.destroy({where:{id:cid}});

        return res.status(200).end();
    }

}