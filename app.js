import express from 'express'
import Router from './routes'

const app = express()
const PORT = process.env.PORT || 9000

/**
 * Añadimos las Rutas
 */
app.use(Router)


/**
 * Inicializamos el Servidor
 */
app.listen(PORT, () => console.log(`Servidor inicializado en el puerto 9000`))