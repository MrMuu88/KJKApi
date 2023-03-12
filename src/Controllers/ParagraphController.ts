import {Request, Response} from "express";
import { QueryTypes } from "sequelize";
import DbConnection from "../Database/DbConnection";
import { Choice } from "../Models/Choice";
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
        const newP = req.body as Paragraph;
        Paragraph.create({...newP});
        throw "not implemented"
    }

    async readParagraph(req:Request,res:Response):Promise<Response>{
        const {pid} = req.params;
        const paragraph = await Paragraph.findByPk(pid,{include:[Choice]});

        if(paragraph === null)
            return res.status(404).end();
        else
            return res.status(200).json(paragraph).end();
    }

    async updateParagraph(req:Request,res:Response):Promise<Response>{
        throw "not implemented"
    }

    async deleteParagraph(req:Request,res:Response):Promise<Response>{
        throw "not implemented"
    }

}