import DbConnection from "../Database/DbConnection";
import {Request, Response} from "express";
import { QueryTypes } from "sequelize";
import { Choice } from "../Models/Choice";
import { Item } from "../Models/Item";
import { Monster } from "../Models/Monster";
import { Paragraph } from "../Models/Paragraph";

export class ParagraphController{
    constructor() {
        
    }

    async listParagraphs(req:Request,res:Response):Promise<Response>{
        const dbResult  = await DbConnection.query("SELECT id FROM Paragraphs;", { type: QueryTypes.SELECT }) as any[];
        const result = dbResult.map(l => l.id) as number[];

        return res.status(200).json(result).end();
    }

    async createParagraph(req:Request,res:Response):Promise<Response>{
        var newP = req.body as Paragraph;
        if(!req.query.exactId)
            newP.id = 0;

        const result = await Paragraph.upsert({...newP});
        
        if(result[1])
            res.status(201); //the query inserted a new row
        else
            res.status(200); // the queyr updated an existing row

        return res.json(result[0]).end();
    }

    async readParagraph(req:Request,res:Response):Promise<Response>{
        const id = req.params.pid;
        const paragraph = await Paragraph.findByPk(id,{include:[Choice,Monster,Item]});
        
        if(paragraph === null)
            return res.status(404).end();
        else
            return res.status(200).json(paragraph).end();
    }

    async updateParagraph(req:Request,res:Response):Promise<Response>{
        const pid = Number(req.params.pid);
        const newP = req.body as Paragraph;
        newP.id = pid;

        const result = await Paragraph.update({...newP},{where:{id:pid}});
        if(result[0] == 1)
            return res.status(200).json(newP).end();
        else
            return res.status(404).end();
    }

    async deleteParagraph(req:Request,res:Response):Promise<Response>{
        var id = req.params.pid;
        var count = await Paragraph.destroy({where:{id}});
        //TODO have to implement deletition chain
        return res.status(200).end();
    }

}