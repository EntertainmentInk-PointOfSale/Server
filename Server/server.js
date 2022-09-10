const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!"});
});

app.get("/product", (req, res) => {
    res.json({ message: "You got a product"});
});

app.listen(PORT,()=> {
    console.log(`Server listening on port ${PORT}`)
});