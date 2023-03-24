import { ProductRepository } from "../repository/ProductRepository";
import { Request, Response, NextFunction, RequestHandler} from 'express';
import { Product } from "../entity/Product";

export const findAll:RequestHandler = async (req:Request, res:Response, next:NextFunction) => {
    const products = await ProductRepository.find();
    res.json(products);
}