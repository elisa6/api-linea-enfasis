const { models } = require('./../libs/sequelize')

class SucursalCityService {
	constructor() {
		this.model = models.SucursalCity
	}

	async getAll() {
		const sucursalCities = await this.model.findAll({})

		return sucursalCities
	}

	async create(name, address, city) {
		const values = {
			name, address, city
		}

		const sucursalCity = await this.model.create(values, {})
		return sucursalCity
	}

	async findOne(id){
		const sucursalCity = await this.model.findByPk(id, {})
		return sucursalCity
	}

	async update(id, values){
		const sucursalCity = await this.findOne(id)
		if(!sucursalCity) return null
		const updatedSucursalCity = await sucursalCity.update(values)
		return updatedSucursalCity
	}

	async delete(id){
		const sucursalCity = await this.findOne(id)
		if(!sucursalCity) return null
		await sucursalCity.destroy
		return sucursalCity.id
	}
}

module.exports = SucursalCityService
