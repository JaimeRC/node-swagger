const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json')

const swaggerProduct = require('../routes/products/swaggerProduct.json')

Object.assign(swaggerDocument.paths, swaggerProduct.paths)
Object.assign(swaggerDocument.definitions, swaggerProduct.definitions)

module.exports = {
    server: swaggerUi.serve,
    setup: swaggerUi.setup(swaggerDocument)
}


