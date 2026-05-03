const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // await mongoose.connect(
        //   "mongodb+srv://kabir:kabir1234@cluster1.lm8loyz.mongodb.net/myapp",
        // );
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb connected...");
    } catch (error) {
        console.log("DB: error", error);
    }
}

module.exports = connectDB;