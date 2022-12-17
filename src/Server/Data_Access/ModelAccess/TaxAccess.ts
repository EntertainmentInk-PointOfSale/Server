//@ts-nocheck

import {Pool} from "mysql2/promise";
import { ITax } from "../Models/tax_model";


export class TaxAccess {
    pool: Pool;

    constructor(pool: Pool) {
        this.pool = pool;
    }

    findAllCodes(): Promise<ITax[]> {
        return new Promise<ITax[]>((resolve,reject) => {
            this.pool.query<ITax[]>(`SELECT * FROM tax`, (err,res) => {
                if(err) reject(err);
                else resolve(res);
            })
        }) 
    }

    findByCode(code:number) : Promise<ITax | undefined> {
        return new Promise<ITax | undefined>((resolve,reject) => {
            this.pool.query<ITax | undefined>(`SELECT * FROM tax WHERE tax_code=?`,code, (err,res) => {
                if(err) reject(err);
                else resolve(res?.[0]);
            })
        })
    }
}