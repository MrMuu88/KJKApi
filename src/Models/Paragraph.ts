import {Table,Column, Model,DataType,HasMany,HasOne} from "sequelize-typescript";
import { Choice } from "./Choice";
import { Item } from "./Item";
import { Monster } from "./Monster";

@Table({timestamps:false,tableName:"Paragraphs"})
export class Paragraph extends Model {
    @Column({type:DataType.INTEGER.UNSIGNED,autoIncrement:true,primaryKey:true})
    id!: number;

    @Column({type: DataType.TEXT,allowNull:false})
    text!: string;

    @Column({type: DataType.TEXT,allowNull:true})
    script!: string;
    
    @HasMany(()=> Monster)
    monsters!: Monster[];

    @HasMany(()=> Choice)
    choices!: Choice[];

    @HasMany(() => Item)
    Items!: Item[];
}









