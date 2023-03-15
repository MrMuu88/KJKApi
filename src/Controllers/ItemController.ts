import {Request, Response} from "express";
import { QueryTypes } from "sequelize";
import DbConnection from "../Database/DbConnection";
import { Item } from "../Models/Item";
import { Loot } from "../Models/loot";
import { Paragraph } from "../Models/Paragraph";

export class ItemController{
    constructor() {
        
    }

    async listItems(req:Request,res:Response):Promise<Response>{
        const dbResult  = await DbConnection.query("SELECT id,name FROM Items;", { type: QueryTypes.SELECT }) as any[];
        const result = dbResult.map(l => l.id) as number[];

        return res.status(200).json(dbResult).end();
    }

    async listItemsByParagraph(req:Request,res:Response):Promise<Response>{
        const pid = Number(req.params.pid);
        const paragraph = await Paragraph.findByPk(pid,{include:[Item]});
        
        if(!paragraph?.items)
            return res.status(404).end();
        
        return res.status(200).json(paragraph.items).end();

    }

    async createItem(req:Request,res:Response):Promise<Response>{
        const pid = Number(req.params.pid);
        const amount = Number(req.query.amount) || 1;
        var item = req.body as Item;
        item.id = 0;

        item = await Item.create({...item});

        await Loot.create({paragraphId:pid,itemId:item.id,amount:amount});

        return res.status(201).json(item).end();

    }

    async readItem(req:Request,res:Response):Promise<Response>{
        const iid = Number(req.params.iid);

        const item = await Item.findByPk(iid);
        if(item === null)
            return res.status(404).end();
        else
            return res.status(200).json(item).end();
    }

    async updateItem(req:Request,res:Response):Promise<Response>{
        const iid = Number(req.params.iid);
        var item = req.body as Item;
        item.id = iid;

        const result = await Item.update(item,{where:{id:iid}});

        if(result[0] == 1)
            return res.status(200).json(item).end();
        else
            return res.status(404).end();
    }

    async updateAmount(req:Request,res:Response):Promise<Response>{
        const pid = Number(req.params.pid);
        const iid = Number(req.params.iid);
        const amount = Number(req.query.amount);
        if(!amount)
            return res.status(400).send("amount is required");

        const result = await Loot.update({amount:amount},{where:{paragraphId:pid,itemId:iid}});

        if(result[0] == 1)
            return res.status(200).end();
        else
            return res.status(404).send("not found");
    }

    async deleteItem(req:Request,res:Response):Promise<Response>{
        const iid = Number(req.params.iid);
        await Loot.destroy({where:{itemId:iid}});
        await Item.destroy({where:{id:iid}});

        return res.status(200).end();
    }

    async removeItemfromParagraph(req:Request,res:Response):Promise<Response>{
        const pid = Number(req.params.pid);
        const iid = Number(req.params.iid);

        await Loot.destroy({where:{paragraphId:pid,itemId:iid}});

        return res.status(200).end();
    }

}