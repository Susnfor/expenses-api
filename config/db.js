const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, { // connect to mongoDB
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected: ${connect.connection.host}`.magenta.underline.bold); // log host
        
    } catch (error) {
        console.log(`Error connecting DB: ${error.message}`.red); // log error
        process.exit(1); // exit with failure
        
    }
}

module.exports = connectDB; // export module