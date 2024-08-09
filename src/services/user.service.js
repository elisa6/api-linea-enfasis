const { models } = require('./../libs/sequelize')

class UserService {
	constructor() {
		this.model = models.User
	}

	async getAll() {
		const users = await this.model.findAll({})

		return users
	}

	async create(name, lastName, identification, email, password, phoneNumber, address, status, rolId) {
		const values = {
			name, lastName, identification, email, password, phoneNumber, address, status, rolId
		}

		const user = await this.model.create(values, {})
		return user
	}

	async findOne(id){
		const user = await this.model.findByPk(id, {})
		return user
	}

	async update(id, values){
		const user = await this.findOne(id)
		if(!user) return null
		const updatedUser = await user.update(values)
		return updatedUser
	}

	async delete(id){
		const user = await this.findOne(id)
		if(!user) return null
		await user.destroy
		return user.id
	}
}

module.exports = UserService
