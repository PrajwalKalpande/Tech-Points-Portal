const express = require('express');
const { header } = require('express/lib/request');
const app = express();

 
app.get("/", function(httpRequest, httpResponse,next){
    httpResponse.write("Hello");
   
  next();//remove this and see what happens 
});

app.get("/", function(httpRequest, httpResponse,next){
    httpResponse.write(" World !!!");
    httpResponse.end();
});

 
app.listen(4000,()=>{console.log("Listening on Port 4000")});
