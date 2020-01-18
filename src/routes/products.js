const express = require('express');
const Route = express.Router();

const {getProducts, createProducts, editProducts, deleteProducts} = require('../controller/products');
const {authorization} = require('../middleware/auth')

Route
    .all('/*', authorization)
    .get('/', getProducts)
    .post('/', createProducts)
    .patch('/:id', editProducts)
    .delete('/:id', deleteProducts)
    
module.exports = Route;