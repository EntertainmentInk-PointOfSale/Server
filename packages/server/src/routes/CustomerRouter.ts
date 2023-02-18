//@ts-nocheck
import { CustomerRepository } from "../repository/CustomerRepository"
import { findAll, addDefaults, findByID, findByName } from "../controller/CustomerController"
const express = require('express')
const router = express.Router()

//GETs
router.get('/', findAll)
router.get('/id/:customerID',findByID)
router.get('/name/:customerName', findByName)

//POSTs
router.post('/populate_default_values',addDefaults)


module.exports = router