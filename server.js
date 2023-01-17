const express = require('express');
require('dotenv').config();

const app = express();

app.get('/api/v1/bootcamps', (req,res)=> {
    res.status(200).json({
        success: true,
        message: 'Show all bootcamps'
    });
});

app.get('/api/v1/bootcamps/:id', (req,res)=> {
    res.status(200).json({
        success: true,
        message: `Display bootcamp ${req.params.id}`
    });
});

app.post('/api/v1/bootcamps', (req,res)=> {
    res.status(200).json({
        success: true,
        message: 'Create new bootcamp'
    });
});

app.put('/api/v1/bootcamps/:id', (req,res)=> {
    res.status(200).json({
        success: true,
        message: `Update bootcamp ${req.params.id}`
    });
});

app.delete('/api/v1/bootcamps/:id', (req,res)=> {
    res.status(200).json({
        success: true,
        message: `Delete bootcamp ${req.params.id}`
    });
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}/`);
})