const mongoose = require("mongoose");

async function connectToMongoBD() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGODB_LINK);
  } catch (err) {
    console.error("Failed to connect to Mongo");
  }
}

module.exports = { connectToMongoBD };
