import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Customer {
    @PrimaryColumn()
    Customer_ID: number;

    @Column()
    Phone: string;

    @Column()
    State: number;

    @Column()
    Join_Date: string;

    @Column()
    Tax_Exempt: boolean;

    @Column()
    Tax_Exempt_Number: string;

    @Column()
    Notes: string;
}