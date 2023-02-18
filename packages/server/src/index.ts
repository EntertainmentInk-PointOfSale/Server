//@ts-nocheck

import { LogManager } from './LogManager';
import { AppDataSource } from "./data-source"
import { Tax } from './entity/Tax';
import {TaxRepository} from './repository/TaxRepository'

import "reflect-metadata"

const routes = require('./routes/index')
const express = require('express');
const logger: Logger = LogManager.getLogger();

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

app.use('/api', routes)

app.listen(PORT,()=> {
    console.log(`Server listening on port ${PORT}`)
});
