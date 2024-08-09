const ClientService = require('./../services/client.service')

class ClientController{
    constructor(){
        this.service = new ClientService
    }

    async index(){
        const clients = await this.service.getAll()
        return clients
    }

    async create(date, amount, price, supplierId, userId, productId){
        const client = await this.service.create(date, amount, price, supplierId, userId, productId)
        return client
    }

    async findOne(id){
        const client = await this.service.findOne(id)
        if(!client){
            throw new Error("Client not found")
        }
        delete client.dataValues.password
        return client
    }

    async update(id, values){
        const client = await this.service.update(id, values)
        if (!client){
            throw new Error("CLient not found")
        }
        return client
    }

    async delete(id){
        const client = await this.service.delete(id)
        if (!client){
            throw new Error("Client not found")
        }
        return client
    }
}

module.exports = ClientController