const ProductService = require('./../services/product.service')

class ProductController{
    constructor(){
        this.service = new ProductService
    }

    async index(){
        const products = await this.service.getAll()
        return products
    }

    async create(name, description, price, status){
        const product = await this.service.create(name, description, price, status)
        return product
    }

    async findOne(id){
        const product = await this.service.findOne(id)
        if(!product){
            throw new Error("Product not found")
        }

        return product
    }

    async update(id, values){
        const product = await this.service.update(id, values)
        if (!product){
            throw new Error("Product not found")
        }
        return product
    }

    async delete(id){
        const product = await this.service.delete(id)
        if (!product){
            throw new Error("Product not found")
        }
        return product
    }
}

module.exports = ProductController