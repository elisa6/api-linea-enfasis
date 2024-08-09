const { models } = require('./../libs/sequelize')

class SaleService {
	constructor() {
		this.model = models.Sale
	}

	async getAll() {
		const sales = await this.model.findAll({})

		return sales
	}

	async create(date, amount, price, userId, clientId, productId, storeId) {
		const values = {
			date, amount, price, userId, clientId, productId, storeId
		}

		const sale = await this.model.create(values, {})
		return sale
	}

	async findOne(id){
		const sale = await this.model.findByPk(id, {})
		return sale
	}

	async update(id, values){
		const sale = await this.findOne(id)
		if(!sale) return null
		const updatedSale = await sale.update(values)
		return updatedSale
	}

	async delete(id){
		const sale = await this.findOne(id)
		if(!sale) return null
		await sale.destroy
		return sale.id
	}
}

module.exports = SaleService
