import { STRING } from "sequelize";
import {Table,Column, Model,DataType, Sequelize} from "sequelize-typescript";

@Table({timestamps:false,tableName:"Users"})
export class User extends Model{
    @Column({type:DataType.INTEGER.UNSIGNED,autoIncrement:true, primaryKey:true})
    id!: number;

    @Column({type:STRING,allowNull:false})
    loginName!:string;
    
    @Column({type:STRING,allowNull:false})
    email!: string;

    @Column({type:STRING,allowNull:false})
    password!: string;
}

