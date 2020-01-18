const express = require('express');
const Route = express.Router();

const product = require('./routes/products');
const auth = require('./routes/auth')

Route
.use('/product', product)
.use('/auth', auth)

module.exports = Route;