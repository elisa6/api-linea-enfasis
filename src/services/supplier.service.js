const { models } = require('./../libs/sequelize')

class SupplierService {
	constructor() {
		this.model = models.Supplier
	}

	async getAll() {
		const suppliers = await this.model.findAll({})

		return suppliers
	}

	async create(name, phoneNumber, address, status) {
		const values = {
			name, phoneNumber, address, status
		}

		const supplier = await this.model.create(values, {})
		return supplier
	}

	async findOne(id){
		const supplier = await this.model.findByPk(id, {})
		return supplier
	}

	async update(id, values){
		const supplier = await this.findOne(id)
		if(!supplier) return null
		const updatedSupplier = await supplier.update(values)
		return updatedSupplier
	}

	async delete(id){
		const supplier = await this.findOne(id)
		if(!supplier) return null
		await supplier.destroy
		return supplier.id
	}
}

module.exports = SupplierService
