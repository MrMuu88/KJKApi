import { Sequelize } from "sequelize-typescript";
import appSettings from "../configurations/AppSetting";
import { Choice } from "../Models/Choice";
import { Item } from "../Models/Item";
import { Loot } from "../Models/loot";
import { Monster } from "../Models/Monster";
import { Paragraph } from "../Models/Paragraph";
import { User } from "../Models/user";

// https://dev.to/franciscomendes10866/how-to-use-sequelize-orm-with-typescript-3no
const DbConnection = new Sequelize({
    dialect:  appSettings.databaseConfig.dialect,
    host:     appSettings.databaseConfig.host,
    database: appSettings.databaseConfig.database,
    username: appSettings.databaseConfig.username,
    password: appSettings.databaseConfig.password,
    logging:false,
    models:[
        User,
        Paragraph,
        Choice,
        Item,
        Monster,
        Loot
    ],
});

export default DbConnection;
