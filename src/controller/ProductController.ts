import { ProductRepository } from "../repository/ProductRepository";
import { Request, Response, NextFunction, RequestHandler} from 'express';
import { Product } from "../entity/Product";

export const findAll:RequestHandler = async (req:Request, res:Response, next:NextFunction) => {
    const products = await ProductRepository.find();
    res.json(products);
}

export const findByCode:RequestHandler = async (req:Request, res:Response, next:NextFunction) => {
    const product = await ProductRepository.findOne({
        where: {lookup_code: req.params.productCode}
    })
    res.json(product)
}