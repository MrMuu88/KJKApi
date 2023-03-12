import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Paragraph } from "./Paragraph";

@Table({timestamps:false,tableName:"Choices"})
export class Choice extends Model{
    @Column({type:DataType.INTEGER.UNSIGNED,autoIncrement:true,primaryKey:true})
    id!:number;

    @ForeignKey(()=> Paragraph)
    @Column({type:DataType.INTEGER.UNSIGNED, allowNull:false})
    paragraphId!: number;

    @Column({type:DataType.INTEGER.UNSIGNED, allowNull:false})
    targetParagraphId!: number;

    @BelongsTo(()=> Paragraph)
    paragraph!:Paragraph;


    @Column({type: DataType.TEXT,allowNull:false})
    text!: string;

    @Column({type: DataType.TEXT,allowNull:true})
    condition!: string;

}