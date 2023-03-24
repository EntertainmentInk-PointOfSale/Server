import { Tax } from "../../entity/Tax";
import { AppDataSource } from "../../data-source"

const tax_codes = [
    {
        tax_code: 0,
        tax_name: "None",
        amount: 0.00,
    },
    {
        tax_code: 1,
        tax_name: "GST",
        amount: 0.05,
    },
    {
        tax_code: 2,
        tax_name: "HST",
        amount: 0.13,
    }
]

export async function populate_tax() {
    await AppDataSource.manager.upsert(Tax,tax_codes,["tax_code"])
}