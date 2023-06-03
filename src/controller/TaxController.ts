import { TaxRepository } from '../repository/TaxRepository';
import { Request, Response, NextFunction, RequestHandler} from 'express';

export const findAll:RequestHandler = async (req:Request, res:Response, next:NextFunction) => {
    const taxCodes = await TaxRepository.findAll();
    res.json(taxCodes)
}

export const findByCode:RequestHandler = async (req:Request,  res:Response, next:NextFunction) => {
    TaxRepository.findByCode(
        req.params.taxid
    )
    .then(function(results) {
            res.json(results);
    })   
}