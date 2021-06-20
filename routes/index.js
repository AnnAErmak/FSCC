const Router = require('express')
const router = new Router()
const userRouter = require('./usersRouters')
const listUserRouter = require('./listUserRouters')
const stringRouter = require('./stringRouters')

router.use('/user', userRouter)
router.use('/list', listUserRouter)
router.use('/string', stringRouter)

module.exports = router