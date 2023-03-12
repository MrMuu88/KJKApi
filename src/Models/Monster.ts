import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Encounter } from "./Encounter";

@Table({timestamps:false,tableName:"Monsters"})
export class Monster extends Model{
    @Column({type:DataType.INTEGER.UNSIGNED,autoIncrement:true,primaryKey:true})
    id!:number;

    @ForeignKey(()=> Encounter)
    @Column({type:DataType.INTEGER.UNSIGNED, allowNull:true})
    encounterId!:number;

    @BelongsTo(()=> Encounter)
    encounter!:Encounter;



    @Column({type:DataType.STRING,allowNull:false})
    name!:string;
    
    @Column({type:DataType.TEXT,allowNull:true})
    description!:string;

    @Column({type:DataType.SMALLINT,allowNull:false, defaultValue:6})
    strength!: number;

    @Column({type:DataType.SMALLINT,allowNull:false, defaultValue:6})
    dexterity!: number;
}