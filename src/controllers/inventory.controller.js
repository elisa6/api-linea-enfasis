const InventoryService = require('./../services/inventoy.service')

class InventoryController{
    constructor(){
        this.service = new InventoryService
    }

    async index(){
        const inventories = await this.service.getAll()
        return inventories
    }

    async create(amount, productId, sucursalId){
        const inventory = await this.service.create(amount, productId, sucursalId)
        return inventory
    }

    async findOne(id){
        const inventory = await this.service.findOne(id)
        if(!inventory){
            throw new Error("Inventory not found")
        }

        return inventory
    }

    async update(id, values){
        const inventory = await this.service.update(id, values)
        if (!inventory){
            throw new Error("Inventory not found")
        }
        return inventory
    }

    async delete(id){
        const inventory = await this.service.delete(id)
        if (!inventory){
            throw new Error("Inventory not found")
        }
        return inventory
    }
}

module.exports = InventoryController