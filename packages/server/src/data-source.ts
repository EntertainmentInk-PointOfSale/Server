import "reflect-metadata"
import { DataSource } from "typeorm"
import db_config from "./config/db_config"

import { StockCategory } from "./entity/StockCategory"
import { Supplier } from "./entity/Supplier"
import { Tax } from "./entity/Tax"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: db_config.postgres_user,
    password: db_config.postgres_pass,
    database: db_config.database,
    synchronize: true,
    logging: false,
    entities: [StockCategory, Supplier, Tax],
    migrations: [],
    subscribers: [],
})
