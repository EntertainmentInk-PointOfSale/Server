import { 
    Column, 
    Entity, 
    ManyToOne, 
    PrimaryColumn,
} from "typeorm";
import { PaymentMethod } from "./PaymentMethod";
import { Transaction } from "./Transaction";

@Entity()
export class PaymentMade {
    @PrimaryColumn()
    ID: number;

    //Associated Transaction
    @ManyToOne(() => Transaction)
    Trans_Ref: number;

    //How it was paid for
    @ManyToOne(() => PaymentMethod)
    Method: PaymentMethod;

    @Column("numeric", {
        precision: 12,
        scale: 2,
        nullable: false
    })
    Amount: number;
}