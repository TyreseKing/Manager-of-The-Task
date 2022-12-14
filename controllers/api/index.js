
const router = require("express").Router()
const taskRoutes = require("./taskroutes")
const userRoutes = require("./userroutes")

router.use('/users', userRoutes)
router.use('/tasks', taskRoutes)

module.exports = router
