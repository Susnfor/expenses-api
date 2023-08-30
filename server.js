//imports
const express = require('express'); // import express
const colors = require('colors'); // import colors
const dotenv = require('dotenv'); // import dotenv
const cors = require('cors'); // import cors
const transactions = require('./routes/transactions'); // import routes
const connectDB = require('./config/db'); // import db

dotenv.config({path: './config/config.env'}); // initialize dotenv -> point to config file

connectDB(); // connect to db


const app = express(); // create express app


// middlewares
app.use(express.json()); // use express to parse json
app.use(cors({
    origin: '*'
})); // use cors


//routes
app.use('/api/transactions', transactions); // use routes

const PORT = process.env.PORT // define port

//mongodb connection

app.listen( PORT, () => console.log(`Server is running on port ${PORT}`.yellow.bold)) // run server on port 5000
