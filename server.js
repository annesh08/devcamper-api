const express = require("express");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./config/db");
require("dotenv").config();

//Connect to Database
connectDB();

//Import Route Files
const bootcamps = require("./routes/bootcamps");

const app = express();

//Add Logger middleware for development
if ((process.env.NODE_ENV = "development")) {
  app.use(morgan("common"));
}

//Mount Router
app.use("/api/v1/bootcamps", bootcamps);

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`.yellow.bold);
});

//Handling unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  //Close server and exit process
  server.close(() => process.exit(1));
});
