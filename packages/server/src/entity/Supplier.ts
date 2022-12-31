import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity()
export class Supplier {
    @PrimaryColumn()
    supplier_id: number;

    @Column()
    name: string;

    @Column()
    phone: string;
}