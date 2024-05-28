const path = require('path');
const express = require('express');
const app = new express();
const mongoose = require('mongoose');
const PORT = 4444;
 
app.get('/', (req, res)=>{
    res.send('<h2>Super Server of College Connect </h2>');
})


app.listen( PORT , ()=>{
    console.log(`app running on http://localhost:${PORT}`);
})