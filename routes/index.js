const express = require('express'),
    routes = express.Router(),
    bodyParser = require('body-parser'),
    jsonBodyParser = bodyParser.json()

const {getProduct, newProduct, updateProduct, deleteProduct} = require('./products')


routes.route('/products').get(getProduct)

routes.route('/products').post([jsonBodyParser], newProduct)

routes.route('/products/:id').put([jsonBodyParser], updateProduct)

routes.route('/products/:id').delete(deleteProduct)


module.exports = routes