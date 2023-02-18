//@ts-nocheck
import { CustomerRepository } from "../repository/CustomerRepository"
import { findAll, addDefaults } from "../controller/CustomerController"
const express = require('express')
const router = express.Router()

//GETs
router.get('/', findAll)

router.get('/name/:customerName', (req,res) => {
    CustomerRepository.findByName(
        req.params.customerName)
        .then(function(results) {
            res.json(results)
        })
})

router.get('/id/:customerID', (req,res) => {
    CustomerRepository.findByCode(
        req.params.customerID
    )
    .then(function(results) {
        res.json(results)
    })
})

//POSTs
router.post('/populate_default_values',addDefaults)


module.exports = router