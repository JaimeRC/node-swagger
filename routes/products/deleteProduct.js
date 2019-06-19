const {success, error, products} = require('../../utils')


module.exports = async (req, res) => {
    try {

        const {id} = req.params

        const result = await new Promise((resolve, reject) => {
            let index = products.indexOf(product => product.id === id)
            products.splice(index, 1)
            resolve(products)
        })

        if (result.length) {
            res.status(200).send(success(`Delete product with id: ${id}`))
        } else {
            res.status(204).send(error(result))
        }

    } catch (e) {
        console.error(e.message)
        res.status(500).send(error(e.message))
    }
}