const { Router } = require('express')
const UserController = require('./../controllers/user.controller')
const router = Router()
const controller = new UserController

router.get('/', async (req, res) => {
    const users = await controller.index()
    res.status(200).json({users})
})

router.post('/', async (req, res) => {
    const {name, email, password, status, areaId, area} = req.body
    const user = await controller.create(name, email, password, status, areaId, area)
    res.status(201).json({user})
})

router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const user = await controller.findOne(id)
        res.status(200).json(user)
    } catch(error) {
        res.status(404).json({message: error.message})
    }
})

router.put('/:id', async (req, res) => {
    const {id} = req.params
    const {email = '', name = '', password = '', status = '', areaId = 0} = req.body
    const values = {}

    if(email) values.email = email
    if(name) values.name = name
    if(typeof status == 'boolean') values.status = status
    if(password) values.password = password
    if(areaId) values.areaId = areaId

    try {
        const user = await controller.update(id, values)
        res.status(200).json({user})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const user = await controller.delete(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})

module.exports = router
