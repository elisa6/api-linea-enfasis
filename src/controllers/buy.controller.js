const BuyService = require('./../services/buy.service')

class BuyController{
    constructor(){
        this.service = new BuyService
    }

    async index(){
        const buys = await this.service.getAll()
        return buys
    }

    async create(date, amount, price, supplierId, userId, productId){
        const buy = await this.service.create(date, amount, price, supplierId, userId, productId)
        return buy
    }

    async findOne(id){
        const buy = await this.service.findOne(id)
        if(!buy){
            throw new Error("Buy not found")
        }

        return buy
    }

    async update(id, values){
        const buy = await this.service.update(id, values)
        if (!buy){
            throw new Error("Buy not found")
        }
        return buy
    }

    async delete(id){
        const buy = await this.service.delete(id)
        if (!buy){
            throw new Error("Buy not found")
        }
        return buy
    }
}

module.exports = BuyController