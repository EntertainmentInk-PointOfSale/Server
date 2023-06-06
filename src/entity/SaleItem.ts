import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Transaction } from "./Transaction";
import { Product } from "./Product";
import { Tax } from "./Tax";

@Entity()
export class SaleItem {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    lookup_code: string;

    @Column({nullable: false})
    Name: string;

    @ManyToOne(() => Transaction, (transaction:Transaction) => transaction.Items)
    Trans_Ref: Transaction

    @OneToOne(() => Product, {nullable: true})
    Product_Ref: Product

    @Column("numeric", {
        precision: 12,
        scale: 2,
        nullable: false
    })
    Sale_Price: number;

    @OneToOne(() => Tax, {nullable: false})
    Tax_Applied: Tax;

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
}