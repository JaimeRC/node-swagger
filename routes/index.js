import express from 'express'
import Routes from './controllers'
import {serve, setup} from '../api-docs'

const Router = express.Router()

/**
 * Añadimos los Controladores de las rutas
 */
Router.use('/', Routes)


/**
 * Ruta para acceder al entorno de Testeo Swagger
 */
Router.use('/api-docs', serve, setup)


module.exports = Router