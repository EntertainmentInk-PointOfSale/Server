import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Transaction {
    @PrimaryColumn()
    Transaction_ID: number;

    @Column()
    Customer_ID: number;

    @Column()
    Date: string;

    @Column()
    Time: string;
}