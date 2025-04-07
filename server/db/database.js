const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("DB connection successful...");
  } catch (error) {
    console.log("Database connection error : ", error);
  }
}

module.exports = connectDB;
