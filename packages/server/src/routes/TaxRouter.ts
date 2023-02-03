//@ts-nocheck
import {TaxRepository} from '../repository/TaxRepository'


const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    TaxRepository.find().then(function(results) {
        res.json(results)
    })
})

router.get('/:taxid', (req,res) =>{ 
    TaxRepository.findByCode(
        req.params.taxid)
        .then(function(results) {
            res.json(results);
    })   
})

module.exports = router