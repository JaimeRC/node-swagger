const express = require('express'),
    routes = require('./routes'),
    {server, setup} = require('./api-docs')


const app = express()

app.use('/', routes)

app.use('/api-docs', server, setup)

app.listen(9000, () => console.log(`Server running in port 9000`))