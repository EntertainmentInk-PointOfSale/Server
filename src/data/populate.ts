import { DataSource } from "typeorm";
import {populate_tax} from "./default_data/default.tax";


export default async function load_defaults() {
    await populate_tax();
}