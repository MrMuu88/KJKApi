import { DataTypes, Sequelize} from "sequelize";
import {User} from "../Models/user";

//https://blog.logrocket.com/using-sequelize-with-typescript/
const DbConnection = new Sequelize('KJK','pi','rxmdnq88',{host: '192.168.1.100', dialect: 'mariadb'});

export default DbConnection;

User.init({
    id:{type:DataTypes.INTEGER.UNSIGNED, autoIncrement:true, primaryKey:true},
    loginName:{type:DataTypes.STRING, allowNull:false},
    password:{type:DataTypes.STRING, allowNull:false},
    email:{type:DataTypes.STRING, allowNull:false}
},
{sequelize: DbConnection, timestamps:true,paranoid:true}
);

export function sync(){
    User.sync({alter:true});
}