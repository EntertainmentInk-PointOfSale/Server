import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class PaymentMade {
    @PrimaryColumn()
    Payment_ID: number;

    @Column()
    Transaction_ID: number;

    @Column()
    Method_ID: number;

    @Column()
    Amount: number;
}