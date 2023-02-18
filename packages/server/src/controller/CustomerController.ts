import { CustomerRepository } from "../repository/CustomerRepository"
import { Request, Response, NextFunction, RequestHandler} from 'express';
import { Customer } from "entity/Customer";

export const findAll:RequestHandler = (req:Request, res:Response, next:NextFunction) =>  {
    CustomerRepository.find().then(function(results) {
        res.json(results);
    })
};

export const addDefaults:RequestHandler = (req:Request, res:Response, next:NextFunction) => {
        const new_customer = CustomerRepository.create({
            Name: `FirstName1 LastName1`,
            Phone: "1234567890",
            Email: `test@testemail.com`,
            Active: true,
            Tax_Exempt: false,
            Note: "Randomly Generated Customer"
        }); 
        CustomerRepository.save(new_customer).then(function(result) {
            res.json(result);
        })
};

export const findByID:RequestHandler = (req:Request, res:Response, next:NextFunction) => {
    CustomerRepository.findByID(
        req.params.customerID
    ).then(function(result) {
        res.json(result)
    })
}

export const findByName:RequestHandler = (req:Request, res:Response, next:NextFunction) => {
    CustomerRepository.findByName(
        req.params.customerName
    ).then(function(result) {
        res.json(result)
    })
}