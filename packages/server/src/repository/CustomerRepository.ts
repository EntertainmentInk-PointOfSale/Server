import { AppDataSource } from "../data-source"
import {Customer} from "../entity/Customer"

export const CustomerRepository  = AppDataSource.getRepository(Customer).extend({
    findByCode(customerID: number) {
        return this.createQueryBuilder("customer")
            .where("customer.Customer_ID = :customerID", {customerID})
            .getOne()
    },

    findByName(customerName: string) {
        return this.createQueryBuilder("customer")
            .where("customer.First_Name = :customerName", {customerName})
            .getMany()
    }
});