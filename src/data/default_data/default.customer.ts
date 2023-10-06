//@ts-nocheck
import { Customer } from "../../entity/Customer"
import { AppDataSource } from "../../data-source"

const sample_customers = [

    {
        name: "test",
        active: true,
        phone: "1234567890",
        email: "cmcallmacleod@gmail.com"
    }
]

const required_customers = [
    {
        lookup_code: '1',
        name: "Store",
        active: true,
        phone: "6138415531",
        email: "entertainment_ink@yahoo.ca",
        tax_exempt: false,
        note: "Store profile used for quick salees",
        editable: false,
        isStoreUser: true
    }
]

export async function populate_default_customers() {
    await AppDataSource.manager.upsert(Customer, required_customers, ["lookup_code"])
}