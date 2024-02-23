/** Para las migraciones */
const { Sequelize } = require('sequelize')
const { dbUser, dbPassword, dbHost, dbPort, dbName, env } = require('../config/config')
const setupModels = require('./../database/models')

const USER = encodeURIComponent(dbUser)
const PASSWORD = encodeURIComponent(dbPassword)

const URI = `mysql://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`

const sequelize = new Sequelize(URI, {
    dialect: 'mysql',
    logging: env == 'dev'
})

setupModels(sequelize)

module.exports = sequelize
