import { Tax } from "./entity/Tax";
import { Product } from "./entity/Product";
import "reflect-metadata"
import { DataSource } from "typeorm"
import db_config from "./config/db_config"
import load_defaults from "./data/populate";

//Create data source
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "db",
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
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