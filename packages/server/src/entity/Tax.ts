import { Entity, Column, PrimaryColumn } from "typeorm"
import { DecimalTransformer } from "./DecimalTransformer";

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
}