import { findAll, addDefaults, findByID, updatePersonal } from "../controller/CustomerController"
const express = require('express')
const router = express.Router()

//GETs
router.get('/', findAll)
router.get('/id/:customerID',findByID)

//POSTs
router.post('/populate_default_values',addDefaults)

//PUTS
router.put('/update_personal/:id',updatePersonal)


module.exports = router