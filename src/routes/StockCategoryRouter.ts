//@ts-nocheck
import * as controller from '../controller/StockCategoryController'

const express = require('express')
const router = express.Router()

router.get('/', controller.findAll)

module.exports = router