//@ts-nocheck
import {TaxRepository} from '../repository/TaxRepository'
import * as controller from '../controller/TaxController'

const express = require('express')
const router = express.Router()

router.get('/', controller.findAll)

router.get('/:taxid', controller.findByCode)

module.exports = router