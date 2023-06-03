import { SupplierRepository } from "../repository/SupplierRepository";
import { Request, Response, NextFunction, RequestHandler} from 'express';

export const findAll:RequestHandler = async (req:Request, res:Response, next: NextFunction) => {
    const suppliers = await SupplierRepository.find();
    res.json(suppliers)
}