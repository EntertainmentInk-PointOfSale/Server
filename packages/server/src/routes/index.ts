//@ts-nocheck
const router = require('express').Router();
const stockcategory = require('./StockCategoryRouter')
const taxcategory   = require('./TaxRouter')

router.get('/', (req,res) => {
    res.status(200).json({ message: 'Connected'})
})

router.use('/stockcategory', stockcategory)
router.use('/tax', taxcategory)


module.exports = router