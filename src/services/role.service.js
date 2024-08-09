const { models } = require('../libs/sequelize')

class RoleService {
	constructor() {
		this.model = models.Role
	}

	async getAll() {
		const roles = await this.model.findAll({})

		return roles
	}

	async create(name, status) {
		const values = {
			name, status
		}

		const role = await this.model.create(values, {})
		return role
	}

	async findOne(id){
		const role = await this.model.findByPk(id, {})
		return role
	}

	async update(id, values){
		const role = await this.findOne(id)
		if(!role) return null
		const updatedRole = await role.update(values)
		return updatedRole
	}

	async delete(id){
		const role = await this.findOne(id)
		if(!role) return null
		await role.destroy
		return role.id
	}
}

module.exports = RoleService
