import { Table, Column, Model, DataType, HasMany, BelongsToMany} from "sequelize-typescript";
import { Choice } from "./Choice";
import { Item } from "./Item";
import { Loot } from "./loot";
import { Monster } from "./Monster";

@Table({timestamps:false,tableName:"Paragraphs"})
export class Paragraph extends Model {
    @Column({type:DataType.INTEGER.UNSIGNED,autoIncrement:true,primaryKey:true})
    id!: number;

    @Column({type: DataType.TEXT,allowNull:false})
    text!: string;

    @Column({type: DataType.TEXT,allowNull:true})
    script!: string;
    
    @HasMany(()=> Monster,{onUpdate:"CASCADE",onDelete:"CASCADE", hooks:true})
    monsters!: Monster[];

    @HasMany(()=> Choice,{onUpdate:"CASCADE",onDelete:"CASCADE", hooks:true})
    choices!: Choice[];

    @BelongsToMany(() => Item,{through:{model: () => Loot}})
    items!: Item[];
}









