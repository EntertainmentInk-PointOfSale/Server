//@ts-nocheck
import { Customer } from "../../entity/Customer"
import { AppDataSource } from "../../data-source"

const sample_customers = [

]

const required_customers = [
    {
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
    await AppDataSource.manager.upsert(Customer, required_customers, ["id"])
}