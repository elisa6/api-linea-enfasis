const { models } = require('./../libs/sequelize')

class ClientService {
	constructor() {
		this.model = models.Client
	}

	async getAll() {
		const clients = await this.model.findAll({})

		return clients
	}

	async create(name, lastName, identification, email, phoneNumber, address) {
		const values = {
			name, lastName, identification, email, phoneNumber, address
		}

		const client = await this.model.create(values, {})
		return client
	}

	async findOne(id){
		const client = await this.model.findByPk(id, {})
		return client
	}

	async update(id, values){
		const client = await this.findOne(id)
		if(!client) return null
		const updatedClient = await client.update(values)
		return updatedClient
	}

	async delete(id){
		const client = await this.findOne(id)
		if(!client) return null
		await client.destroy
		return client.id
	}
}

module.exports = ClientService
