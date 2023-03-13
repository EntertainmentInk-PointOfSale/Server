//@ts-nocheck

import { LogManager } from './LogManager';
import { DataSourceStarted } from './data-source';

import "reflect-metadata"

const cors = require('cors')
const routes = require('./routes/index')
const express = require('express');
const bodyParser = require('body-parser')
const corsOptions = {
    origin: '*'
}

//Start Express server
const PORT = process.env.PORT || 3001;
const app = express();

//Use cors
app.use(cors(corsOptions))

//Parse JSON
app.use(bodyParser.json())
app.use('/api', routes)

//Let any dependant code load before starting server
Promise.all([DataSourceStarted]).then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    })
})