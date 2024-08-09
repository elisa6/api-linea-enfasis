const UserService = require('./../services/user.service')

class UserController{
    constructor(){
        this.service = new UserService
    }

    async index(){
        const users = await this.service.getAll()
        return users
    }

    async create(name, lastName, identification, email, password, phoneNumber, address, status, rolId){
        const user = await this.service.create(name, lastName, identification, email, password, phoneNumber, address, status, rolId)
        return user
    }

    async findOne(id){
        const user = await this.service.findOne(id)
        if(!user){
            throw new Error("User not found")
        }
        delete user.dataValues.password
        return user
    }

    async update(id, values){
        const user = await this.service.update(id, values)
        if (!user){
            throw new Error("User not found")
        }
        return user
    }

    async delete(id){
        const user = await this.service.delete(id)
        if (!user){
            throw new Error("User not found")
        }
        return user
    }
}

module.exports = UserController