import * as controller from "../controller/ProductController";
const express = require('express')
const router = express.Router()

//GETs
router.get('/',controller.findAll);
router.get('/code/:productCode', controller.findByCode)
router.get('/id/:id', controller.findByID)

router.post('/create',controller.addProduct)

module.exports = router