import { findAll } from "../controller/ProductController";
const express = require('express')
const router = express.Router()

//GETs
router.get('/',findAll);

module.exports = router