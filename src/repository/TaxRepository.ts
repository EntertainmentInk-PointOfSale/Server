import { AppDataSource } from "../data-source"
import {Tax} from "../entity/Tax"

export const TaxRepository  = AppDataSource.getRepository(Tax).extend({
    findByCode(taxCode: number) {
        return this.createQueryBuilder("tax")
            .where("tax.tax_code = :taxCode", {taxCode})
            .getOne()
    },

    findAll() {
        return this.createQueryBuilder("tax")
            .getMany()
    }
});