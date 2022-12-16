import { ITax } from "../Models/tax_model";

export interface TaxDB {
    findAllCodes() : Promise<ITax[]>;
    findByCode(code:number) : Promise<ITax | undefined>;
}