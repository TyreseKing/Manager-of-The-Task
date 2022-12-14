const router = require('express').Router();
const taskRoutes = require('./taskroutes');
const userRoutes = require('./userroutes');


router.use('/tasks', taskRoutes);
router.use('/users', userRoutes);

module.exports = router;
