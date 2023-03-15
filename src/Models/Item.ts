import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Paragraph } from "./Paragraph";

@Table({timestamps:false,tableName:"Items"})
export class Item extends Model{
    @Column({type:DataType.INTEGER.UNSIGNED,autoIncrement:true,primaryKey:true})
    id!:number;

    @ForeignKey(()=> Paragraph)
    @Column({type:DataType.INTEGER.UNSIGNED, allowNull:true})
    paragraphId!:number;

    @BelongsTo(()=> Paragraph)
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