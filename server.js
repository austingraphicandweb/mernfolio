//this is the server file for my mernfolio
const express = require('express');
const PORT = 3000;
const app = express();

//setting up a static server to the index.html page
app.get('*',function (req,res){
    res.sendFile()
})

//listening for the express server to start up
app.listen(PORT, (req,res)=>{console.log(`app listening on port ${PORT}`)});