/** Entry point */
const express = require('express')
const morgan = require('morgan')
const { port } = require('./config/config')
const app = express()
const routerApi = require('./routes')

app.use(express.json()) /** Para convertir request y response en formato JSON */

app.use(morgan('dev'))
app.use(morgan('combined'))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

routerApi(app)

app.listen(port, () => {console.log(`App running on port ${port}`)}) /** Puerto donde escucha el API */
