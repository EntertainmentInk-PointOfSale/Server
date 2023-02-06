//@ts-nocheck
const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.send("PAYMENT METHOD ROUTER")
})

module.exports = router