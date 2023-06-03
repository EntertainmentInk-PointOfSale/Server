import { AppDataSource } from "../data-source"
import { Supplier } from "../entity/Supplier"

export const SupplierRepository = AppDataSource.getRepository(Supplier).extend({
})