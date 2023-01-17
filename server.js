const express = require('express');
require('dotenv').config();

//Import Route Files
const bootcamps = require('./routes/bootcamps');

const app = express();

//Mount Router
app.use('/api/v1/bootcamps', bootcamps);

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}/`);
})