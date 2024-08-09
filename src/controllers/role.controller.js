const RoleService = require('./../services/role.service')

class RoleController{
    constructor(){
        this.service = new RoleService
    }

    async index(){
        const roles = await this.service.getAll()
        return roles
    }

    async create(name, status){
        const role = await this.service.create(name, status)
        return role
    }

    async findOne(id){
        const role = await this.service.findOne(id)
        if(!role){
            throw new Error("Role not found")
        }

        return role
    }

    async update(id, values){
        const role = await this.service.update(id, values)
        if (!role){
            throw new Error("Role not found")
        }
        return role
    }

    async delete(id){
        const role = await this.service.delete(id)
        if (!role){
            throw new Error("Role not found")
        }
        return role
    }
}

module.exports = RoleController