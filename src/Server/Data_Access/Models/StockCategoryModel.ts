import { RowDataPacket } from "mysql2";

export interface IStockCategory extends RowDataPacket {
    tax_id: number;
    stock_name: string;
};