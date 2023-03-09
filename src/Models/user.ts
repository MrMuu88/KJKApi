import {Model,Optional,DataTypes, Sequelize} from "sequelize";
import DbConnection from "../Database/DbConnection";

interface UserAttributes{
    id:number;
    loginName: string;
    password: string;
    email: string;

    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface UserInput extends Optional<UserAttributes,'id'>{}
export interface UserOutput extends Required<UserAttributes>{}

export class User extends Model<UserAttributes,UserInput> implements UserAttributes {
    id!: number;
    loginName!:string;
    email!: string;
    password!: string;


    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

