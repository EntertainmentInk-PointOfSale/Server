import { AppDataSource } from "../data-source"
import {Customer} from "../entity/Customer"
import { ILike } from "typeorm";

export const CustomerRepository  = AppDataSource.getRepository(Customer).extend({
    findByID(customerID: number) {
        return this.createQueryBuilder("customer")
            .where("customer.ID = :customerID", {customerID})
            .getOne()
    },

    findByName(customerName: string) {
        return this.find({
            where: {
                Name: ILike(`%${customerName}%`)
            }
        })
    }
});