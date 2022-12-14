//importing external module 
const express = require('express');
const sequalize = require('./config/connection');
// app use express
const app = express();
//creating port 
const PORT = process.env.PORT || 3305;

//using static assets through express middleweare 
app.use(express.static('public'));
// Middleware for the parsing of JSON dataclec
app.use(express.json());
// Middleware for parsing of URL encoded data
app.use(express.urlencoded({ extended: true }));

require('./routes/htmlroutes')(app);
app.use(require('./routes/apiroutes'));
//require('./routes/apiroutes')(app);


// Connect to the database before starting the Express.js server
sequalize.sync().then(()=>
app.listen(PORT, () => {
    console.log('========================= ')
    console.log(`Server available at ${PORT}`)
    console.log('========================= ')
})); 
