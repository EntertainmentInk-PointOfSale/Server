const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const data = require('./Data_Access/data')
const path = require('path');

//Data Initalization

var DataAccess = new data.myData.getInstance();


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!"});
});

app.get("/product/:product_id", (req, res) => {
    
    res.json({ message: `You got a product with Product ID: + ${req.params.product_id}`});
});

app.get("/product", (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend\\product\\product_entry.html'))
});

app.listen(PORT,()=> {
    console.log(`Server listening on port ${PORT}`)
});