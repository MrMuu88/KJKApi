import DatabaseConfig from "./Database.Config";

export class AppSettings{
    port !: number;
    databaseConfig !: DatabaseConfig;
}

const appSettings: AppSettings = require('../Appsettings.json');

export default appSettings;

