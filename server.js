var express = require("express");
var app = express();

app.get('/', (req, resp)=>{
    resp.end("Hello World!");
}).listen(8080, ()=>{
    console.log("Server started!");
});