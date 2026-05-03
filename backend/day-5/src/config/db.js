const mongoose = require("mongoose");

//creating database cofiguration
const connectDB = async () => {
  try {
 await mongoose.connect(
   "mongodb+srv://kabir:kabir1234@cluster1.lm8loyz.mongodb.net/myapp",
 );
    console.log("MongoDB connected");
  } catch (error) {
    console.log("DB Error:", error);
  }
};

module.exports = connectDB;


