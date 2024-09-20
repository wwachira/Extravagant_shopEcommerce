const express = require('express')
const mongoose = require('monoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//create a database 
//you can also create a separate file for this and then import/

mongoose.connect('mongodb+srv://lizandrerw:lizandra2024@cluster0.beb3j.mongodb.net/')
.then(() => console.log('MongoDB connected'))
.catch((error) => console.log(error));

const app = express()
const PORT = PROCESS.env.PORT || 5000;

app.use(
    cors({

        
    })
)