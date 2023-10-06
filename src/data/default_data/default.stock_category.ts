//@ts-nocheck
import { StockCategory } from "../../entity/StockCategory"
import { AppDataSource } from "../../data-source"

const sample_category = [
    {
        stock_id: 0,
        stock_name: 'Category 0'
    },
    {
        stock_id: 1,
        stock_name: 'Category 1'
    },    {
        stock_id: 2,
        stock_name: 'Category 2'
    },
]

export async function populate_category() {
    await AppDataSource.manager.upsert(StockCategory,sample_category,["stock_id"])
}