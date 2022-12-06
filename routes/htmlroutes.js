const path = require('path');

module.exports = (app) => {
    app.get('/', (req, res)=>{
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    app.get('/login', (req, res)=>{
        res.sendFile(path.join(__dirname, '../public/login.html'));
    });

    app.get('/task', (req, res)=>{
        res.sendFile(path.join(__dirname, '../public/task.html')); 
    });
}