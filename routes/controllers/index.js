import {getProduct, newProduct, updateProduct, deleteProduct} from './products'
import express from 'express'
import bodyParser from 'body-parser'

const Router = express.Router()
const jsonBodyParser = bodyParser.json()


/**
 * Peticiones del Controlador Products
 *
 * @Controller Products
 */
Router.route('/products')
    .get(getProduct)
    .post([jsonBodyParser], newProduct)
    .put([jsonBodyParser], updateProduct)
    .delete(deleteProduct)


 module.exports = Router