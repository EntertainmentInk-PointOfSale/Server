import "reflect-metadata"
import { DataSource } from "typeorm"
import db_config from "./config/db_config"

//Create data source
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: db_config.postgres_user,
    password: db_config.postgres_pass,
    database: db_config.database,
    synchronize: true,
    logging: false,
    entities: ["./entity/*.ts"],
    migrations: [],
    subscribers: [],
})

export const DataSourceStarted = AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source Initalized")
    })
    .catch((err) => {
        console.error("Error initalizing Data:", err)
    });

export default AppDataSource;