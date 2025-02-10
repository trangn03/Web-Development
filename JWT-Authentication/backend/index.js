const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");

dotenv.config();
const app = express();

const connectToMongo = async () => {
  await mongoose.connect(process.env.DB_URL);
  console.log("Connected to MongoDB");
};
connectToMongo();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

// ROUTES
app.use("/v1/auth", authRoute);

app.listen(8000, () => {
    console.log("Server is running on port 8000");
}); 


