const {costsList} = require('../models/models')
const ApiError = require('../error/ApiError')


class UserListController {

    async create (req, res, next) {
        try{
            const {name, userId} = req.body
            const userList = await costsList.create({name, userId})
            return res.json(userList)
        }catch (e){
            next(ApiError.badRequest((e.message)))
        }

    }

    async getAll (req, res) {
        const userLists = await costsList.findAll()
        return res.json(userLists)

    }

    async getOne (req, res) {

    }
}

module.exports = new UserListController()