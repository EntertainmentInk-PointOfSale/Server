import { StockCategoryRepository } from "../repository/StockCategoryRepository";
import { Request, Response, NextFunction, RequestHandler} from 'express';

export const findAll:RequestHandler = async (req:Request, res:Response, next: NextFunction) => {
    const suppliers = await StockCategoryRepository.find();
    res.json(suppliers)
}