import { IStockCategory } from "../Models/StockCategoryModel";

export interface StockCategoryDB {
    findAllCategories() : Promise<IStockCategory[]>;
    findByID(id:number) : Promise<IStockCategory | undefined>;
}