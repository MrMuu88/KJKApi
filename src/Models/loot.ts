import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Item } from "./Item";
import { Paragraph } from "./Paragraph";

@Table({timestamps:false,tableName:"Loot"})
export class Loot extends Model{

    @ForeignKey(()=> Item)
    @Column({type:DataType.INTEGER.UNSIGNED,primaryKey:true})
    itemId!:number;

    @ForeignKey(()=> Paragraph)
    @Column({type:DataType.INTEGER.UNSIGNED,primaryKey:true})
    paragraphId!:number;

    @BelongsTo(() => Item)
    item!:Item;
    @BelongsTo(() => Paragraph)
    paragraph!:Paragraph;

    @Column({type:DataType.INTEGER,allowNull:false})
    amount!:number;
}