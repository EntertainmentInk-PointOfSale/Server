import { ITax } from "../Models/TaxModel";

export interface TaxDB {
    findAllCodes() : Promise<ITax[]>;
    findByCode(code:number) : Promise<ITax | undefined>;
}