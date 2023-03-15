import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Paragraph } from "./Paragraph";

@Table({timestamps:false,tableName:"Monsters"})
export class Monster extends Model{
    @Column({type:DataType.INTEGER.UNSIGNED,autoIncrement:true,primaryKey:true})
    id!:number;

    @ForeignKey(()=> Paragraph)
    @Column({type:DataType.INTEGER.UNSIGNED, allowNull:true})
    paragraphId!:number;

    @BelongsTo(()=> Paragraph)
    paragraph!:Paragraph;



    @Column({type:DataType.STRING,allowNull:false})
    name!:string;
    
    @Column({type:DataType.TEXT,allowNull:true})
    description!:string;

    @Column({type:DataType.SMALLINT,allowNull:false, defaultValue:6})
    strength!: number;

    @Column({type:DataType.SMALLINT,allowNull:false, defaultValue:6})
    dexterity!: number;
}