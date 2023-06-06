import { Entity, 
    Column, 
    PrimaryColumn, 
    PrimaryGeneratedColumn, 
    ManyToOne, 
    CreateDateColumn,
    UpdateDateColumn} from "typeorm";
import { StockCategory } from "./StockCategory";
import { Tax } from "./Tax";
import { Supplier } from "./Supplier";


@Entity()
export class Product {
    //Product ID
    @PrimaryGeneratedColumn()
    product_id: number;

    //Look up code - UPC or otherwise
    @Column({ unique: true })
    lookup_code: string; 

    //Display name for product
    @Column()
    product_name: string;

    //Customer purchase price
    @Column("numeric", {
        precision: 12,
        scale: 2
    })
    selling_price: number;

    //Our price
    @Column("numeric", {
        precision: 12,
        scale: 2,
        default: 0
    })
    purchase_price: number;

    //Amount remaining
    @Column({
        default: 0
    })
    stock_level: number;   
    
    //Date product was entered
    @CreateDateColumn()
    creation_date: Date;

    //Date product was updated
    @UpdateDateColumn()
    last_updated: Date;

    //Connections to other tables
    @ManyToOne(() => Supplier, (supplier) => supplier.products, {
        eager: true 
    })
    supplier: Supplier

    @ManyToOne(() => Tax, (tax) => tax.products, {
        nullable: false,
        eager: true,
    })
    tax_applied: Tax

    @ManyToOne(() => StockCategory, (stock_cat) => stock_cat.products, {
        eager: true
    })
    stock_category: StockCategory
}