import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import {Loot} from "./loot";
import { Paragraph } from "./Paragraph";

@Table({timestamps:false,tableName:"Items"})
export class Item extends Model{
    @Column({type:DataType.INTEGER.UNSIGNED,autoIncrement:true,primaryKey:true})
    id!:number;
  
    @BelongsToMany(()=> Paragraph,{through:{model: () => Loot}})
    paragraph!:Paragraph;

    @Column({type:DataType.STRING,allowNull:false})
    name!: string;

    @Column({type:DataType.TEXT,allowNull:true})
    description!:string;

    @Column({type:DataType.BOOLEAN,allowNull:false,defaultValue:false})
    isStackable!:boolean;

    @Column({type:DataType.BOOLEAN,allowNull:false,defaultValue:false})
    isEquiptable!:boolean;

    @Column({type:DataType.INTEGER.UNSIGNED,allowNull:false,defaultValue:false})
    price!:number;
}