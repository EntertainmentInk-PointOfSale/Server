import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity()
export class StockCategory {
    @PrimaryColumn()
    stock_id: number;

    @Column()
    stock_name: string;

}