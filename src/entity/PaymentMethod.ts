import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class PaymentMethod {
    @PrimaryColumn()
    Method_ID: number;

    @Column()
    Name: string;
}