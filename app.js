const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path'); //core module


var app = express();

const route = require('./routes/route');

//connect to mongoose db
mongoose.connect('mongodb://localhost:27017/contactlist');

//on successful connectioin
mongoose.connection.on('connected', () =>{
    console.log('Connected to mongodb @ 27017');
})

mongoose.connection.on('error', (err) => {

    if(err)
    {
        console.log('Error in Database connection '+ err);
    }
})


//define port
const port = 3000;

//adding middleware - cors
app.use(cors());

//adding body parser
app.use(bodyparser.json());


//static files
app.use(express.static(path.join(__dirname,'public')));


//routes
app.use('/api', route);

//testing server
app.get('/',(req,res) => {
    res.send('foobar');
})
app.listen(port, () => {
    console.log(`Server started at ${port}`);
})