import { Tax } from "./entity/Tax";
import { Product } from "./entity/Product";
import "reflect-metadata"
import { DataSource } from "typeorm"
import db_config from "./config/db_config"
import load_defaults from "./data/populate";

//Create data source
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: db_config.postgres_user,
    password: db_config.postgres_pass,
    database: db_config.database,
    synchronize: true,
    logging: true,
    entities: ["src/entity/*.ts"],
    migrations: [],
    subscribers: [],
})

export const DataSourceStarted = AppDataSource
    .initialize()
    .then((res) => {
        console.log("Data Source Initalized")

        console.log("Preloading data...")
        load_defaults();
    })
    .catch((err) => {
        console.error("Error initalizing Data:\n", err)
    });

export default AppDataSource;