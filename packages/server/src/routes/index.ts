//@ts-nocheck
const router = require('express').Router();

const stockcategory = require('./StockCategoryRouter')
const taxcategory   = require('./TaxRouter')
const paymentmade   = require('./PaymentMadeRouter')
const paymentmethod = require('./PaymentMethodRouter')
const transaction   = require('./TransactionRouter')
const customer      = require('./CustomerRouter')

router.get('/', (req,res) => {
    res.status(200).json({ message: 'Connected'})
})

router.use('/stockcategory', stockcategory)
router.use('/tax',           taxcategory)
router.use('/payment',       paymentmade)
router.use('/method',        paymentmethod)
router.use('/customer',      customer)
router.use('/transaction',   transaction)


module.exports = router