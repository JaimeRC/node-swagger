import {success, error, products}  from '../../../utils'

/**
 * Peticion para devolver una lista de Productos
 *
 * @param req                   Peticion de entrada (Request)
 * @param res                   Respuesta (Response)
 * @returns {Promise<void>}
 */
module.exports = async (req, res) => {
    try {

        const result = await new Promise((resolve, reject) => resolve(products))

        if (result.length) {
            res.status(200).send(success(result))
        } else {
            res.status(204).send(error(result))
        }

    } catch (e) {
        console.error(e.message)
        res.status(500).send(error(e.message))
    }
}


