const { models } = require('./../libs/sequelize')

class ProductService {
	constructor() {
		this.model = models.Product
	}

	async getAll() {
		const products = await this.model.findAll({})

		return products
	}

	async create(name, description, price, status) {
		const values = {
			name, description, price, status
		}

		const product = await this.model.create(values, {})
		return product
	}

	async findOne(id){
		const product = await this.model.findByPk(id, {})
		return product
	}

	async update(id, values){
		const product = await this.findOne(id)
		if(!product) return null
		const updatedProduct = await product.update(values)
		return updatedProduct
	}

	async delete(id){
		const product = await this.findOne(id)
		if(!product) return null
		await product.destroy
		return product.id
	}
}

module.exports = ProductService
