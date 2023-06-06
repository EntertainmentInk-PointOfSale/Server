//@ts-nocheck
import * as controller from "../controller/SupplierController"

const express = require('express')
const router = express.Router()

router.get('/', controller.findAll)

module.exports = router