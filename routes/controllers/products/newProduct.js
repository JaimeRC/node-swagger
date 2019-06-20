import {success, error, products}  from '../../../utils'

/**
 * Peticion para crear un Producto
 *
 * @param req                   Peticion de entrada (Request)
 * @param res                   Respuesta (Response)
 * @returns {Promise<void>}
 */
module.exports = async (req, res) => {
    try {

        const {product} = req.body

        const result = await new Promise((resolve, reject) => {
            product.id = "5"
            products.push(product)
            resolve(products)
        })

        if (result.length) {
            res.status(200).send(success(`Add product with id: ${product.id}`))
        } else {
            res.status(204).send(error(result))
        }

    } catch (e) {
        console.error(e.message)
        res.status(500).send(error(e.message))
    }
}