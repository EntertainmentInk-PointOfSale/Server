import { RowDataPacket } from "mysql2";

export interface ITax extends RowDataPacket {
    tax_code: number;
    tax_name: string;
    tax_rate: number;
};