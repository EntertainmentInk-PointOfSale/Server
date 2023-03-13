import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { 
    IsEmail
} from "class-validator"

@Entity()
export class Customer {
    //Identifying parameter
    @PrimaryGeneratedColumn()
    ID: number;

    //Customer Name
    @Column({ type: "varchar", })
    Name: string;

    //Is the customer ACTIVE
    @Column()
    Active: boolean;

    //Phone number - what kind of validators do I need?
    @Column()
    Phone: string;

    //E-mail address - what kind of validators do I need?
    @Column()
    @IsEmail()
    Email: string;

    //When did the customer join
    @CreateDateColumn()
    Join_Date: Date;

    //Apply tax exempt status
    @Column()
    Tax_Exempt: boolean;

    //IF tax exempt what is their status card
    @Column({nullable: true})
    Tax_Exempt_Number: string;

    @Column({type: "varchar", default:""})
    Note: string;
}