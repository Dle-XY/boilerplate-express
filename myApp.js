require('dotenv').config()
var express = require('express');
var app = express();



app.get('/json', (req, res) => {

  if (process.env.MESSAGE_STYLE == "uppercase") 
  {
    res.json({message: "Hello json".toUpperCase()})

  } else {

    res.json({message: "Hello json"})
    
  }
})







































 module.exports = app;
