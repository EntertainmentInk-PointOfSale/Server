import { findAll, addDefaults, findByID, updatePersonal, createCustomer, findStoreCustomer } from "../controller/CustomerController"
const express = require('express')
const router = express.Router()

//GETs
router.get('/', findAll)
router.get('/id/:customerID',findByID)
router.get('/store', findStoreCustomer)

//POSTs
router.post('/populate_default_values',addDefaults)
router.post('/create', createCustomer)

//PUTS
router.put('/update_personal/:id',updatePersonal)


module.exports = router