const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

module.exports = router;




// const path = require('path'); 
// const fs = require('fs'); 
// //var uniqid = require('uniqid');

// module.exports = (app) => {
//    app.get('/api/login', (req,res)=>{ }); 
    
//     app.get('/api/task', (req,res)=>{});

//     app.post('/api/task', (req,res=>{}));

//     app.delete('/api/task:id', (req, res)=> {});
// };



