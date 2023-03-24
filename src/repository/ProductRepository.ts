import { AppDataSource } from "../data-source"
import {Product} from "../entity/Product"

export const ProductRepository  = AppDataSource.getRepository(Product).extend({
});