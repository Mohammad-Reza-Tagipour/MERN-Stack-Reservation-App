import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
// to using import express you need to add 'type':"module" to package.json in this case we can use ES6 modules like import and export
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

// to run our app we need to listen to any port
app.listen(8800, () => {
  connect();

  console.log("Connected to backend.");
});
