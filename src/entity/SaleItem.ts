import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Transaction } from "./Transaction";
import { Product } from "./Product";
import { Tax } from "./Tax";

@Entity()
export class SaleItem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    lookup_code: string;

    @Column({nullable: false})
    Name: string;

    // Numerics
    @Column("numeric", {
        precision: 12,
        scale: 2,
        nullable: false
    })
    Sale_Price: number;

    @Column("numeric", {
        precision: 12,
        scale: 2,
        nullable: false
    })
    Tax_Amount: number;

    @Column("numeric", {
        precision: 12,
        scale: 2,
        nullable: false,
        default: 0.00
    })
    Discount_Applied: number;

    @Column({
        nullable: false,
        default: ""
    })
    Discount_Reason: string;

    // Relations
    @OneToOne(() => Tax, {nullable: false})
    @JoinColumn()
    Tax_Applied: Tax;

    @ManyToOne(() => Transaction, (transaction:Transaction) => transaction.items_sold)
    transaction: Transaction

    @ManyToOne(() => Product, (product:Product) => product.products_sold, {nullable: true})
    product: Product
}