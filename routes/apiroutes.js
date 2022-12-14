const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

console.log('api/routes');
router.use('/api', apiRoutes);

module.exports = router;

