const Expenses = require('../models/Expenses') ; // import model
const mongoose = require('mongoose'); // import mongoose

//GET all Transactions
exports.getTransactions = async (req, res) => { //res == sends response back to browser, req == has information about the request
try {
    const transactions = await Expenses.find({}).sort({createdAt: -1}); // find all transactions
return res.status(200).json({transactions}); //sends back json string
} catch (err) {
    res.status(400).json({err: err.message});
}

}

//GET a single transaction
exports.getTransaction = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) 
    return res.status(404).send(`No transaction with id: ${id}`);
try {
    const transactions = await Expenses.findById(id);
return res.status(200).json({transactions});
} catch (err) {
    res.status(404).json({err: `no transaction found found ${err.message}` });
}
}



//POST a new transaction
exports.createTransaction = async (req, res) => {
    const {name, amount} = req.body;
try {
    const transactions = await Expenses.create({name, amount});
    res.status(200).json({transactions});
    
} catch (err) {
    res.status(400).json({err: err.message});
}}

//DELETE a transaction
exports.deleteTransaction = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) 
    return res.status(404).send(`No transaction with id: ${id}`);
try {
    const transaction = await Expenses.findOneAndDelete({_id: id});
return res.status(200).json({transaction});
} catch (err) {
    res.status(404).json({err: `no transaction deleted ${err.message}` });
}
}

// //PATCH/Update a transaction
exports.updateTransaction = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) 
    return res.status(404).send(`No transaction with id: ${id}`);

try {
    const transaction = await Expenses.findOneAndUpdate({_id: id}, {
    ...req.body
    });
return res.status(200).json({transaction});
} catch (err) {
    res.status(404).json({err: `no transaction found ${err.message}` });
}
}

