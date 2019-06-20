/**
 * Estructura para una respuesta correcta
 *
 * @param data                      Contenido de la respuesta (string/array)
 * @returns {{stattus: string}}
 */
export const success = (data) => {
    let success = {stattus: "OK"}
    if (typeof data === 'string') {
        success.message = data
    } else {
        success.data = data
    }
    return success
}

/**
 * Estructura para una respuesta erronea
 *
 * @param message                   Mensage de error
 * @returns {{status: string}}
 */
export const error = (message) =>  {
    let error = {status: "KO"}
    error.message = message
    return error
}


/**
 * Datos de ejemplo
 *
 * @type {*[object]}
 */
export const products = [
    {id: "1", code: "a", description: "uno", count: 1},
    {id: "2", code: "b", description: "dos", count: 2},
    {id: "3", code: "c", description: "tres", count: 3},
    {id: "4", code: "d", description: "cuatro", count: 4}
]