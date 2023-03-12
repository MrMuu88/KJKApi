import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Item } from "./Item";
import { Monster } from "./Monster";
import { Paragraph } from "./Paragraph";

@Table({timestamps:false,tableName:"Encounters"})
export class Encounter extends Model{
    @Column({type:DataType.INTEGER.UNSIGNED,autoIncrement:true,primaryKey:true})
    id!:number;
    
    @ForeignKey(()=> Paragraph)
    @Column({type:DataType.INTEGER.UNSIGNED, allowNull:false})
    paragraphId!:number;
    
    @BelongsTo(() => Paragraph)
    paragraph!:Paragraph;


    @Column({type: DataType.TEXT,allowNull:true})
    script!:string;

    @HasMany(() => Monster)
    monsters!: Monster[];

    @HasMany(() => Item)
    loot!:Item[];
}