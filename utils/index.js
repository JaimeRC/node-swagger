module.exports.success = (data) => {
    let success = {stattus: "OK"}
    if (typeof data === 'string') {
        success.message = data
    } else {
        success.data = data
    }
    return success
}


module.exports.error = (message) =>  {
    let error = {status: "KO"}
    error.message = message
    return error
}


module.exports.products = [
    {id: "1", code: "a", description: "uno", count: 1},
    {id: "2", code: "b", description: "dos", count: 2},
    {id: "3", code: "c", description: "tres", count: 3},
    {id: "4", code: "d", description: "cuatro", count: 4}
]