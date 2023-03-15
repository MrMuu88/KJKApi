import {Request, Response} from "express";
import { QueryTypes } from "sequelize";
import DbConnection from "../Database/DbConnection";
import { Monster } from "../Models/Monster";

export class MonsterController{
    constructor() {
        
    }

    async listMonstersByParagraph(req:Request,res:Response):Promise<Response>{
        const pid = Number(req.params.pid);
        const monsters = await Monster.findAll({where:{paragraphId:pid}});

        return res.status(200).json(monsters).end();
    }

    async listMonsters(req:Request,res:Response):Promise<Response>{
        const dbResult  = await DbConnection.query("SELECT id, name FROM Monsters;", { type: QueryTypes.SELECT }) as any[];

        return res.status(200).json(dbResult).end();
    }

    async createMonster(req:Request,res:Response):Promise<Response>{
        var newM = req.body as Monster;
        newM.paragraphId = Number(req.params.pid);
        newM.id = 0;

        newM = await Monster.create({...newM});

        return res.status(201).json(newM).end();
    }

    async readMonster(req:Request,res:Response):Promise<Response>{
        var mid = Number(req.params.mid);
        var monster = await Monster.findByPk(mid);
        if(monster !== null)
            return res.status(200).json(monster).end();
        else
            return res.status(404).end();
    }

    async updateMonster(req:Request,res:Response):Promise<Response>{
        var updateM = req.body as Monster;
        const mid = Number(req.params.mid);
        updateM.id = mid;

        const result = await Monster.update({...updateM},{where:{id:mid}});
        if(result[0] == 1)
            return res.status(200).json(updateM).end();
        else
            return res.status(404).end();
    }

    async deleteMonster(req:Request,res:Response):Promise<Response>{
        var mid = Number(req.params.mid);

        await Monster.destroy({where:{id:mid}});

        return res.status(200).end();
    }

}