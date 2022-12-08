//importing external module 
const express = require('express');

// app use express
const app = express();
//creating port 
const PORT = process.env.PORT || 3001;

//using static assets through express middleweare 
app.use(express.static('public'));
// Middleware for the parsing of JSON data
app.use(express.json());
// Middleware for parsing of URL encoded data
app.use(express.urlencoded({ extended: true }));

require('./routes/htmlroutes')(app);
//require('./routes/apiroutes')(app);

// Connect to the database before starting the Express.js server
sequalize.sync().then(()=>
app.listen(PORT, () => {
    console.log('========================= ')
    console.log(`Server available at ${PORT}`)
    console.log('========================= ')
})); 
