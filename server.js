const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

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

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
