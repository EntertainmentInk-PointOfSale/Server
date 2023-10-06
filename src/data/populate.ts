import { DataSource } from "typeorm";
import { populate_product } from "./default_data/default.product";
import { popuplate_supplier } from "./default_data/default.supplier";
import { populate_tax } from "./default_data/default.tax";
import { populate_category } from "./default_data/default.stock_category";
import { populate_payment_method } from "./default_data/default.payment_method";
import { populate_default_customers } from "./default_data/default.customer";


export default async function load_defaults() {
    await populate_tax();
    await populate_category();
    await popuplate_supplier();
    await populate_product();
    await populate_payment_method();
    await populate_default_customers();
}