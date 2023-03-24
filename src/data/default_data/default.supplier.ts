import { Supplier } from "../../entity/Supplier";
import { AppDataSource } from "../../data-source"


const sample_supplier = [
    {
        supplier_id: 0,
        name: "Fake Supplier",
        phone: "6132935998"
    }
]

export async function popuplate_supplier() {
    await AppDataSource.manager.upsert(Supplier,sample_supplier,["supplier_id"])
}