const { models } = require('./../libs/sequelize')

class BuyService {
	constructor() {
		this.model = models.Buy
	}

	async getAll() {
		const buy = await this.model.findAll({})

		return buy
	}

	async create(date, amount, price, supplierId, userId, productId) {
		const values = {
			date, amount, price, supplierId, userId, productId
		}

		const buy = await this.model.create(values, {})
		return buy
	}

	async findOne(id){
		const buy = await this.model.findByPk(id, {})
		return buy
	}

	async update(id, values){
		const buy = await this.findOne(id)
		if(!buy) return null
		const updatedBuy = await buy.update(values)
		return updatedBuy
	}

	async delete(id){
		const buy = await this.findOne(id)
		if(!buy) return null
		await buy.destroy
		return buy.id
	}
}

module.exports = BuyService
