import { Entity, Column, PrimaryColumn, ManyToOne, OneToMany } from "typeorm"
import { Product } from "./Product";

@Entity()
export class Supplier {
    @PrimaryColumn()
    supplier_id: number;

    @Column()
    name: string;

    @Column()
    phone: string;

    @OneToMany(() => Product, (product) => product.supplier)
    products: Product[];

}