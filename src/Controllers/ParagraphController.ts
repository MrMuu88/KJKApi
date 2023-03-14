import DbConnection from "../Database/DbConnection";
import {Request, Response} from "express";
import { QueryTypes } from "sequelize";
import { Choice } from "../Models/Choice";
import { Encounter } from "../Models/Encounter";
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
        newP.id = 0; // MariaDB is working with identity insert by default, hence I have to reset the id to 0 to create a new one

        newP = await Paragraph.create({...newP});

        return res.status(201).json(newP).end();
    }

    async readParagraph(req:Request,res:Response):Promise<Response>{
        const id = req.params.pid;
        const paragraph = await Paragraph.findByPk(id,{include:[Choice,Item,{model:Encounter, include:[Monster,Item]}]});
        
        if(paragraph === null)
            return res.status(404).end();
        else
            return res.status(200).json(paragraph).end();
    }

    async updateParagraph(req:Request,res:Response):Promise<Response>{
        const id = req.params.pid;
        const newP = req.body as Paragraph;
        newP.id = Number(id);

        const a = await Paragraph.update({...newP},{where:{id}});

        return res.status(200).json(newP).end();
    }

    async deleteParagraph(req:Request,res:Response):Promise<Response>{
        var id = req.params.pid;
        Paragraph.destroy({where:{id}});
        //TODO have to implement deletition chain
        return res.status(200).end();
    }

}