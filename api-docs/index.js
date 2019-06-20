import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json'

/**
 * Importamos los archivos JSON con la documentacion Swagger de cada Controlador, la juntamos y
 * exportamos.
 */
import swaggerProduct from '../routes/controllers/products/swaggerProduct.json'

Object.assign(swaggerDocument.paths, swaggerProduct.paths)
Object.assign(swaggerDocument.definitions, swaggerProduct.definitions)

module.exports = {
    serve: swaggerUi.serve,
    setup: swaggerUi.setup(swaggerDocument)
}


