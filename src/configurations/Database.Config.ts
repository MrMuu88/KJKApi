import { Dialect } from "sequelize";

export default class DatabaseConfig {
    dialect !: Dialect;
    host !: string;
    database !: string;
    username !: string;
    password !: string;
}