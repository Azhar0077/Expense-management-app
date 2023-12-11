const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");
const connectDb = require("./config/connectDb");

const PORT = 8000 || process.env.PORT;

const app = express();

//config dot env file
dotenv.config();

// database call
connectDb();

// middlewares function

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//user routes
app.use("/api/v1/users", require("./routes/userRoute"));

//transection routes
app.use("/api/v1/transections", require("./routes/transectionRoutes"));

//static files

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// server
app.listen(PORT, () => {
  console.log(`The server is running port ${PORT}`);
});
