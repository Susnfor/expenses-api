const express = require('express');  // import express
// const Workout = require('../models/Workouts'); // import model
const router = express.Router(); // initialize express router

//import controllers
const {createTransaction, getTransaction, getTransactions, deleteTransaction, updateTransaction} = require('../controllers/transControllers'); // import controller

//GET all transactions
router
    .route('/') // define endpoint
    .get(getTransactions) //GET a single transaction
    .post(createTransaction); //POST a new transaction
router
    .route('/:id') // define endpoint
    .get(getTransaction) //GET a single transaction
    .delete(deleteTransaction) //DELETE a transaction
    .patch(updateTransaction); //PATCH/Update a transaction


module.exports = router; // export router