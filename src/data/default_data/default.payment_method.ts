import { PaymentMethod } from "../../entity/PaymentMethod";
import { AppDataSource } from "../../data-source"

const sample_method = [
    {
        id: 0,
        name: 'cash'
    },
    {
        id: 1,
        name: 'debit'
    },
    {
        id: 2,
        name: 'credit'
    },
    {
        id: 3,
        name: 'other'
    }
]

export async function populate_payment_method() {
    await AppDataSource.manager.upsert(PaymentMethod, sample_method, ['id'])
}