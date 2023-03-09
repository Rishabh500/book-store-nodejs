const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const { getProduct } = require('../controller/product');

const router = express.Router();

router.get('/', getProduct);

module.exports = router;
