import { findAll,findByCode } from "../controller/ProductController";
const express = require('express')
const router = express.Router()

//GETs
router.get('/',findAll);
router.get('/code/:productCode', findByCode)

module.exports = router