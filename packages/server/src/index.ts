//@ts-nocheck

import { LogManager } from './LogManager';

const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

//Data Initalization
var logger: Logger = new LogManager().getLogger();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!"});
});

app.listen(PORT,()=> {
    console.log(`Server listening on port ${PORT}`)
});