const { models } = require('./../libs/sequelize')

class InventoryService {
	constructor() {
		this.model = models.Inventory
	}

	async getAll() {
		const inventories = await this.model.findAll({})

		return inventories
	}

	async create(amount, productId, sucursalId) {
		const values = {
			amount, productId, sucursalId
		}

		const inventory = await this.model.create(values, {})
		return inventory
	}

	async findOne(id){
		const inventory = await this.model.findByPk(id, {})
		return inventory
	}

	async update(id, values){
		const inventory = await this.findOne(id)
		if(!inventory) return null
		const updatedInventory = await inventory.update(values)
		return updatedInventory
	}

	async delete(id){
		const inventory = await this.findOne(id)
		if(!inventory) return null
		await inventory.destroy
		return inventory.id
	}
}

module.exports = InventoryService
