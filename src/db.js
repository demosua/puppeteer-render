const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const dbURI = process.env.MONGO_URI;
    await mongoose.connect(dbURI);
    console.log('connected to database');
  } catch (error) {
    console.error('error connect to database:', error);
    process.exit(1);
  }
};

module.exports = connectDB;