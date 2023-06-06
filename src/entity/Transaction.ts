import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    ManyToOne,
    OneToMany, 
    PrimaryColumn,
    ManyToMany,
    JoinTable
} from "typeorm";

import { SaleItem } from "./SaleItem";
import { Customer } from "./Customer";
import { PaymentMade } from "./PaymentMade";

@Entity()
export class Transaction {
    @PrimaryColumn()
    Transaction_ID: number;

    @CreateDateColumn()
    Date: string;

    //Associated customer
    @ManyToOne(() => Customer)
    Customer_ID: number;

    //Items
    @OneToMany(() => SaleItem, (item: SaleItem) => item.Trans_Ref)
    Items: SaleItem[]

    //Additional information
    @Column()
    Note: string;

    //How it was paid for
    @ManyToMany(() => PaymentMade)
    @JoinTable()
    Payment_Methods: PaymentMade[];
}