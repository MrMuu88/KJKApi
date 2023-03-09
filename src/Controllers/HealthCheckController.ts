import {Request,Response} from "express";
import { Sequelize } from "sequelize";
import  DbConnection from "../Database/DbConnection";

export class HealtCheckController{
    db:Sequelize;
    constructor() {
        this.db = DbConnection;

        this.checkDatabaseConnection = this.checkDatabaseConnection.bind(this);
    }

    async checkDatabaseConnection(req:Request,res:Response){
        try{
            await this.db.authenticate()
            res.send("database is accesible");
        }catch(error){
            res.send("can't connect ot the database");
        }
    }
}