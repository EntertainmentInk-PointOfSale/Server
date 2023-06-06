//@ts-nocheck
import { Product } from "../../entity/Product";
import { AppDataSource } from "../../data-source"

const sample_product = [
    {
        lookup_code:  "123456789",
        product_name: "Sample Product - 1",
        selling_price: 12.99,
        purchase_price: 4.00,
        stock_level: 1,
        tax_applied: 2,
        supplier: 0,
        stock_category: 2,
    },
    {
        lookup_code:  "987654321",
        product_name: "Some other cool product",
        selling_price: 119.99,
        purchase_price: 4.00,
        stock_level: 10,
        tax_applied: 1,
        supplier: 0,
        stock_category: 1
    },
    {
        lookup_code:  "146701203",
        product_name: "All my Data #420",
        selling_price: 119.99,
        purchase_price: 4.00,
        stock_level: 10,
        tax_applied: 0,
        supplier: 0,
        stock_category: 1
    },
]

export async function populate_product() {
    await AppDataSource.manager.upsert(Product,sample_product,["lookup_code"])
}