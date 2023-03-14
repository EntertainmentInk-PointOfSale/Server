import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm"
import { DecimalTransformer } from "./Util/DecimalTransformer";
import { Product } from "./Product";

@Entity()
export class Tax {
    @PrimaryColumn()
    tax_code: number;

    @Column()
    tax_name: string;

    @Column("numeric", { 
        precision: 3, 
        scale: 2, 
        default: 0.00
    })
    amount: number;

    @OneToMany(() => Product, (product) => product.tax_applied, )
    products: Product[];
}