const express = require('express')  //will run an express aplication
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//create a database 
//you can also create a separate file for this and then import/

mongoose.connect('mongodb+srv://lizandrerw:lizandra2024@cluster0.beb3j.mongodb.net/')
.then(() => console.log('MongoDB connected'))
.catch((error) => console.log(error));

const app = express()  //create an app
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin : 'http://localhost:5173', //every time i run my origin it runs on l/hst 5...
        methods : ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders : [
            "Content-Type",
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'

        ],
        credentials: 'True' //will help in in loging in

        
    })
);

app.use(cookieParser());
app.use(express.json());


app.listen(PORT, ()=> console.log(`Server is running on port $ {PORT}`)) //BASIC server config