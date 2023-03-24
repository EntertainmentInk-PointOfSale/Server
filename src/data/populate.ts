import { DataSource } from "typeorm";
import { populate_product } from "./default_data/default.product";
import { popuplate_supplier } from "./default_data/default.supplier";
import {populate_tax} from "./default_data/default.tax";


export default async function load_defaults() {
    await populate_tax();
    await popuplate_supplier();
    await populate_product();
}