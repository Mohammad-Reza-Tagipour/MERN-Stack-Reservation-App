import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
//for libraries you don't need add .js like above examples but for files you need add .js
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
// to using import express you need to add 'type':"module" to package.json in this case we can use ES6 modules like import and export

//In Node.js, express is a popular web framework used for building server-side applications. The const app = express() code creates an instance of the express application which can be used to handle HTTP requests and responses.Once you have created an instance of the express application, you can begin to define routes, middleware, and other functionality required by your application. For example, you might define a route that handles GET requests to the root URL /:
const app = express();
dotenv.config();
const port = process.env.PORT || 5500;
const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB.");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
  process.exit(1);
});

// Middlewares
app.use(express.json());
// this code mean when you visit this endpoint i'm gonnas say use authRoute
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

// to run our app we need to listen to any port

// what does express does taking request and response parmaters and use it inside any api request, what this request? basically whatever comes from a user who is making api request and this respone(res) will be what we are sending our users as response
app.get("/users", (req, res) => {
  // let's say response send (you can use json() if you are sending and object)
  res.send("hello first request‌!");
});

app.listen(port, async () => {
  await connectToDb();

  console.log(`Server started on port ${port}.`);
});
