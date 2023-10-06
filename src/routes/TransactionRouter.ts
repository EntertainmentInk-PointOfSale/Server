//@ts-nocheck
const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.send("TRANSACTION ROUTER")
})

router.post('/', (req, res) => {
    
})

module.exports = router