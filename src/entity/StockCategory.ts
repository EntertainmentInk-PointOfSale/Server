import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm"
import { Product } from "./Product";

@Entity()
export class StockCategory {
    @PrimaryColumn()
    stock_id: number;

    @Column()
    stock_name: string;

    @OneToMany(() => Product, (product) => product.stock_category)
    products: Product[];
}