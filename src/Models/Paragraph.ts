import {Table,Column, Model,DataType,HasMany,HasOne} from "sequelize-typescript";
import { Choice } from "./Choice";
import { Encounter } from "./Encounter";
import { Item } from "./Item";

@Table({timestamps:false,tableName:"Paragraphs"})
export class Paragraph extends Model {
    @Column({type:DataType.INTEGER.UNSIGNED,autoIncrement:true,primaryKey:true})
    id!: number;

    @Column({type: DataType.TEXT,allowNull:false})
    text!: string;

    @Column({type: DataType.TEXT,allowNull:true})
    script!: string;

    @HasOne(()=> Encounter)
    encounter!: Encounter;

    @HasMany(()=> Choice)
    choices!: Choice[];

    @HasMany(() => Item)
    Items!: Item[];
}









