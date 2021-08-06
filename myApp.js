require('dotenv').config()
var express = require('express');
var app = express();


app.get('/json', function(req, res, next) {

    //var response = "Hello World".toUpperCase();

    if (process.env.MESSAGE_STYLE === "uppercase") {
        response = "Hello World".toUpperCase();
      } else {
        response = "Hello World";
      }

    res.send({response})

})






































 module.exports = app;
