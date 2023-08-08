import { BeforeInsert, Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { 
    IsEmail
} from "class-validator"
import { Transaction } from "./Transaction";

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", })
    name: string;

    @Column()
    active: boolean;

    //Phone number - what kind of validators do I need?
    @Column()
    phone: string;

    //E-mail address - what kind of validators do I need?
    @Column()
    @IsEmail()
    email: string;

    @CreateDateColumn()
    join_Date: Date;

    @Column()
    tax_exempt: boolean;

    @Column({nullable: true})
    tax_exempt_number: string;

    @Column({type: "varchar", default:""})
    note: string;

    @Column({default: true})
    editable: boolean;

    @Column({default: false})
    isStoreUser: boolean;

    @OneToMany(() => Transaction, (transaction: Transaction) => transaction.customer)
    transactions: Transaction[]
}