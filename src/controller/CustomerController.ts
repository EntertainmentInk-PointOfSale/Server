import { CustomerRepository } from "../repository/CustomerRepository"
import { Request, Response, NextFunction, RequestHandler} from 'express';
import { Customer } from "../entity/Customer";
import { ILike } from "typeorm";

export const findAll:RequestHandler = async(req:Request, res:Response, next:NextFunction) =>  {
    if(Object.keys(req.query).length === 0) {
        const results = await CustomerRepository.find();
        return res.json(results);
    }

    const query = {}

    //Map query parameters to cased Keys
    for (let [key, value] of Object.entries(req.query)) {
        switch(key) {
            case 'id':
                query['ID'] = value;
                break;
            case 'name':
                query['Name'] = ILike(`%${value}%`);
                break;
            case 'join_date':
                query['Join_Date'] = value;
                break;
        }
    }

    CustomerRepository.find({
        where: query
    })
    .then(function(results) {
        return res.json(results);
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

export const updatePersonal:RequestHandler = (req:Request, res:Response, next:NextFunction) => {
    if(typeof req.body === "undefined") {
        console.log("Undefined body")
        return res.send(404,"Undefined Body")
    }

    CustomerRepository
        .createQueryBuilder()
        .update(Customer)
        .set(req.body)
        .where("ID = :id", {id: req.params.id})
        .returning("*")
        .execute()
        .then((results) => {
            res.json(results.raw[0])
        })
}

export const createCustomer:RequestHandler = (req:Request, res:Response, next:NextFunction) => {
    console.log(req.body)

    if(typeof req.body === "undefined") {
        console.log("Undefined body")
        return res.send(404,"Undefined Body")
    }

    const new_customer = CustomerRepository.create({
        Name: req.body.name,
        Phone: req.body.phone,
        Email: req.body.email,
        Active: true,
        Tax_Exempt: req.body.tax_exempt,
        Note: req.body.note
    }); 
    CustomerRepository.save(new_customer).then(function(result) {
        res.json(result.ID);
    })
}