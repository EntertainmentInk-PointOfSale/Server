//@ts-nocheck

import {Pool} from "mysql2/promise";
import {IStockCategory} from "../Models/StockCategoryModel"


export class StockCategoryAccess {
    pool: Pool;

    constructor(pool: Pool) {
        this.pool = pool;
    }

    findAllCategories(): Promise<IStockCategory[]> {
        return new Promise<IStockCategory[]>((resolve,reject) => {
            this.pool.query<IStockCategory[]>(`SELECT * FROM stock_category`, (err,res) => {
                if(err) reject(err);
                else {
                    resolve(res);
                }
            })
        }) 
    }

    findByID(id:number) : Promise<IStockCategory | undefined> {
        return new Promise<IStockCategory | undefined>((resolve,reject) => {
            this.pool.query<IStockCategory | undefined>(`SELECT * FROM stock_category WHERE stock_id=?`,id, (err,res) => {
                if(err) reject(err);
                else resolve(res?.[0]);
            })
        })
    }
}