import {Sequelize} from "sequelize-typescript";
import {User} from "../Models/user";

// https://dev.to/franciscomendes10866/how-to-use-sequelize-orm-with-typescript-3no
const DbConnection = new Sequelize({
    dialect: 'mariadb',
    host: '192.168.1.100',
    database: 'KJK',
    username: 'pi',
    password: 'rxmdnq88',
    logging:false,
    models:[User],
});

export default DbConnection;
