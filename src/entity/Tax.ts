import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm"
import { DecimalTransformer } from "./DecimalTransformer";
import { Product } from "./Product";

@Entity()
export class Tax {
    @PrimaryColumn()
    tax_code: number;

    @Column()
    tax_name: string;

    @Column({ 
        name: 'amount', 
        type: 'decimal', 
        precision: 3, 
        scale: 2, 
        default: 0.00,
        transformer: new DecimalTransformer()})
    amount: number;

    @OneToMany(() => Product, (product) => product.tax_applied, )
    products: Product[];
}