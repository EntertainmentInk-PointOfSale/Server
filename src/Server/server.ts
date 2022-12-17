//@ts-nocheck

import { StockCategoryDB } from "./Data_Access/ModelDBs/StockCategoryDB";

const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const data = require('./Data_Access/data')
const path = require('path');

//Data Initalization

var DataAccess = new data.myData.getInstance();
const tax:TaxDB = data.tax;
const category:StockCategoryDB = data.category;

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!"});
});

//TODO: temporary test route
app.get("/api/tax", (req, res) => {
    tax.findAllCodes().then((result) => {
        res.json({result})
    }).catch(function(error) {
        res.status(400).send("Error...")
    });
});

//TODO: temporary test route
app.get("/api/tax/:taxID", (req, res) => {
    tax.findByCode(req.params.taxID).then((result) => {
        res.json({result})
    }).catch(function(error) {
        res.status(400).send("Error...")
    });
})

//TODO: temporary test route
app.get("/api/category", (req, res) => {
    category.findAllCategories().then((result) => {
        res.json({result})
    }).catch(function(error) {
        res.status(400).send("Error...")
    });
});

//TODO: temporary test route
app.get("/api/category/:categoryID", (req, res) => {
    category.findByID(req.params.categoryID).then((result) => {
        res.json({result})
    }).catch(function(error) {
        res.status(400).send("Error...")
    });
})

app.get("/product/:product_id", (req, res) => {
    
    res.json({ message: `You got a product with Product ID: + ${req.params.product_id}`});
});

app.get("/product", (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend\\product\\product_entry.html'))
});

app.listen(PORT,()=> {
    console.log(`Server listening on port ${PORT}`)
});