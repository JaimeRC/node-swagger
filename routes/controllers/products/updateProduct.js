import {success, error, products}  from '../../../utils'

/**
 * Peticion para actualizar un Producto
 *
 * @param req                   Peticion de entrada (Request)
 * @param res                   Respuesta (Response)
 * @returns {Promise<void>}
 */
module.exports = async (req, res) => {
    try {

        const {id} = req.params
        const {product} = req.body

        const result = await new Promise((resolve, reject) => {
            for(let item of products){
                if(item.id === id){
                    item.code = product.code
                    item.description = product.description
                    item.count = product.count
                }
            }
            resolve(products)
        })

        if (result.length) {
            res.status(200).send(success(`Update product with id: ${id}`))
        } else {
            res.status(204).send(error(result))
        }

    } catch (e) {
        console.error(e.message)
        res.status(500).send(error(e.message))
    }
}