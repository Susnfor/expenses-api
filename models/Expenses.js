const mongoose = require('mongoose');

//first arguement == defines structure of document, second arguement == timestamp
const expensesSchema = new mongoose.Schema({ // create schema
    name:{
        type: String,
        trim: true,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    }
},{timestamps: true} );



module.exports = mongoose.model('Expenses', expensesSchema); // export model