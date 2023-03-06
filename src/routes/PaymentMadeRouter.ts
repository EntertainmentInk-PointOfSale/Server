//@ts-nocheck
const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.send("PAYMENT MADE ROUTER")
})

module.exports = router