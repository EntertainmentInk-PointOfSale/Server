//@ts-nocheck
import { LogManager } from "../LogManager";

const router = require('express').Router();
const stockcategory = require('./StockCategoryRouter')
const taxcategory   = require('./TaxRouter')
const paymentmade   = require('./PaymentMadeRouter')
const paymentmethod = require('./PaymentMethodRouter')
const transaction   = require('./TransactionRouter')
const product       = require('./ProductRouter')
const customer      = require('./CustomerRouter')
const logger = LogManager.getLogger();

router.get('/', (req,res) => {
    res.status(200).json({ message: 'Connected'})
})

//Log Requests
router.use((req,res,next) => {
    logger.info(req);
    next();
})

router.use('/stockcategory', stockcategory)
router.use('/tax',           taxcategory)
router.use('/payment',       paymentmade)
router.use('/method',        paymentmethod)
router.use('/customer',      customer)
router.use('/transaction',   transaction)
router.use('/product',       product)

module.exports = router