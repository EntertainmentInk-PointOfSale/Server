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

export const findByID:RequestHandler = async (req:Request, res:Response, next:NextFunction) => {
    const product = await ProductRepository.findOne({
        where: {
            id: req.params.id
        }
    })
    res.json(product)
}

export const addProduct:RequestHandler = async (req:Request, res:Response, next:NextFunction) => {
    if(typeof req.body === "undefined") {
        console.log("Undefined body")
        return res.send(404,"Undefined Body")
    }

    const body = req.body;

    const new_product = ProductRepository.create({
        lookup_code: body.lookup_code,
        product_name: body.product_name,
        selling_price: body.selling_price,
        purchase_price: body.purchase_price,
        stock_level: body.stock_level,
        supplier: body.supplier_id,
        tax_applied: body.tax_id,
        stock_category: body.category_id
    })

    ProductRepository.save(new_product).then((result) => {
        res.json(result.id)
    })
}