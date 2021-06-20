const Router = require('express')
const router = new Router()
const userListController = require('../controllers/userListController')

router.post('/', userListController.create)
router.get('/', userListController.getAll)
router.get('/:id', userListController.getOne)


module.exports = router