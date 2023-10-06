import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class PaymentMethod {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;
}