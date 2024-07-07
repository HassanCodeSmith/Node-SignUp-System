const mongoose = require("mongoose");

exports.connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/SignupSystem");
    console.log("Database connected ");
  } catch (error) {
    console.error("Error in db connection: ", error);
  }
};
