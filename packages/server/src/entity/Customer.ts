import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer {
    //Identifying
    @PrimaryGeneratedColumn()
    Customer_ID: number;

    @Column()
    First_Name: string;
 
    @Column()
    Last_Name: string;

    //State
    @Column()
    Active: boolean;

    @Column()
    Tax_Exempt: boolean;

    //Contact
    @Column()
    Phone: string;

    @Column()
    Email: string;

    //Additional Fields
    @Column()
    Join_Date: string;

    @Column()
    Tax_Exempt_Number: string;

    @Column()
    Notes: string;
}