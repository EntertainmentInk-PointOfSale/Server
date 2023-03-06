//@ts-nocheck
const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.send("TRANSACTION ROUTER")
})

module.exports = router