import {Table,Column, Model,DataType} from "sequelize-typescript";

@Table({timestamps:false,tableName:"Users"})
export class User extends Model{
    @Column({type:DataType.INTEGER.UNSIGNED,autoIncrement:true, primaryKey:true})
    id!: number;

    @Column({type:DataType.STRING,allowNull:false})
    loginName!:string;
    
    @Column({type:DataType.STRING,allowNull:false})
    email!: string;

    @Column({type:DataType.STRING,allowNull:false})
    password!: string;
}

