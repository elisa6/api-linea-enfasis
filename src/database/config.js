/**Para los verbos, GET, PUT, POST, DELETE */
const { dbUser, dbPassword, dbHost, dbPort, dbName } = require('./../config/config')

const USER = encodeURIComponent(dbUser)
const PASSWORD = encodeURIComponent(dbPassword)

const URI = `mysql://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`

module.exports = {
    development:{
        url: URI,
        dialect:'mysql'
    },
    production:{
        url: URI,
        dialect:'mysql'
    }
}
