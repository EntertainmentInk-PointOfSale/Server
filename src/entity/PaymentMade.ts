import { 
    Column, 
    Entity, 
    JoinColumn, 
    ManyToOne, 
    PrimaryColumn,
    OneToOne
} from "typeorm";
import { PaymentMethod } from "./PaymentMethod";
import { Transaction } from "./Transaction";

@Entity()
export class PaymentMade {
    @PrimaryColumn()
    id: number;

    @Column("numeric", {
        precision: 12,
        scale: 2,
        nullable: false
    })
    amount: number;

    //Associated Transaction
    @ManyToOne(() => Transaction)
    @JoinColumn()
    transaction: Transaction;

    //How it was paid for
    @OneToOne(() => PaymentMethod)
    @JoinColumn()
    PaymentMethod: PaymentMethod;
}