import { AppDataSource } from "../data-source"
import { StockCategory } from "../entity/StockCategory"

export const StockCategoryRepository = AppDataSource.getRepository(StockCategory).extend({
})