//@ts-nocheck

import { LogManager } from './LogManager';
import { AppDataSource } from "./data-source"
import { Tax } from './entity/Tax';
import "reflect-metadata"

const express = require('express');
const taxRepository = AppDataSource.getRepository(Tax);

var logger: Logger = LogManager.getLogger();

//Data Initalization
AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source Initalized")
    })
    .catch((err) => {
        console.error("Error initalizing Data:", err)
    });

//Start Express server
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!"});
});

//TODO: Test route - remove after testing
app.get("/api/tax", (req,res) => {
    taxRepository.find().then(function(results) {
        res.json(results)
    })
})

//TODO: Test route - remove after testing
app.get("/api/tax/:taxid", (req,res) => {
    taxRepository.findOneBy({
        tax_code: req.params.taxid
    }).then(function(results) {
        res.json(results);
    })   
})


app.listen(PORT,()=> {
    console.log(`Server listening on port ${PORT}`)
});
