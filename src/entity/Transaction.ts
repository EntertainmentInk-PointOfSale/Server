import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    ManyToOne,
    OneToMany, 
    PrimaryColumn,
    ManyToMany,
    JoinTable,
    JoinColumn
} from "typeorm";

import { SaleItem } from "./SaleItem";
import { Customer } from "./Customer";
import { PaymentMade } from "./PaymentMade";

@Entity()
export class Transaction {
    @PrimaryColumn()
    id: number;

    @CreateDateColumn()
    Date: string;

    @Column()
    note: string;

    // Totals
    @Column("numeric", {
        precision: 12,
        scale: 2
    })
    sub_total: number;

    @Column("numeric", {
        precision: 12,
        scale: 2
    })
    tax_balance: number;

    @Column("numeric", {
        precision: 12,
        scale: 2,
        default: 0.00
    })
    discount_totals: number;

    @Column("numeric", {
        precision: 12,
        scale: 2,
        default: 0.00
    })
    refunds_total: number;

    // Relations
    @ManyToOne(() => Customer)
    @JoinColumn()
    customer: Customer;

    @OneToMany(() => SaleItem, (item: SaleItem) => item.transaction)
    items_sold: SaleItem[]

    @OneToMany(() => PaymentMade, (payment: PaymentMade) => payment.transaction)
    payments_made: PaymentMade[];
}