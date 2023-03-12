import { Sequelize } from "sequelize-typescript";
import { Choice } from "../Models/Choice";
import { Encounter } from "../Models/Encounter";
import { Item } from "../Models/Item";
import { Monster } from "../Models/Monster";
import { Paragraph } from "../Models/Paragraph";
import { User } from "../Models/user";

// https://dev.to/franciscomendes10866/how-to-use-sequelize-orm-with-typescript-3no
const DbConnection = new Sequelize({
    dialect: 'mariadb',
    host: '192.168.1.100',
    database: 'KJK',
    username: 'pi',
    password: 'rxmdnq88',
    logging:false,
    models:[
        User,
        Paragraph,
        Choice,
        Encounter,
        Item,
        Monster
    ],
});

export default DbConnection;
