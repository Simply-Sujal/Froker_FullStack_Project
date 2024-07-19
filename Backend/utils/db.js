const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI;

const connectDb = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connection successful to MongoDB");
    } catch (error) {
        console.error("Database connection failed.", error);
        process.exit(1);
    }
};

module.exports = connectDb;
