const { models } = require('./../libs/sequelize')

class StoreService {
	constructor() {
		this.model = models.Store
	}

	async getAll() {
		const stores = await this.model.findAll({})

		return stores
	}

	async create(name, address, email, phoneNumber, openingHours, sucursalCityId) {
		const values = {
			name, address, email, phoneNumber, openingHours, sucursalCityId
		}

		const store = await this.model.create(values, {})
		return store
	}

	async findOne(id){
		const store = await this.model.findByPk(id, {})
		return store
	}

	async update(id, values){
		const store = await this.findOne(id)
		if(!store) return null
		const updatedStore = await store.update(values)
		return updatedStore
	}

	async delete(id){
		const store = await this.findOne(id)
		if(!store) return null
		await store.destroy
		return store.id
	}
}

module.exports = StoreService
