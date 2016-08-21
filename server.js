var express = require("express");
var app = express();

app.get(/^\/\d+$/, (req, resp)=>{
    resp.end(printDate(+req.url.substr(1)));
    
}).get(/^\/\w+\%20\d{1,2},\%20[1-9]\d{3}$/, (req, resp)=>{
    resp.end(printDate(req.url.substr(1)));
    
}).listen(8080, ()=>{
    console.log("Server started!");
});

function printDate(dateStrOrTimestamp) {
    if('string' === typeof dateStrOrTimestamp) {
        dateStrOrTimestamp = decodeURIComponent(dateStrOrTimestamp);
    }
    
    var dateObj = {unix:'', natural:''};
    var months = ['Janurary', 'Feburary', 'March', 'April', 
                    'May', 'June', 'July', 'August', 'September', 
                    'October', 'November', 'December'];
    
    var date = new Date(dateStrOrTimestamp);
    
    dateObj.unix = date.getTime();
    dateObj.natural = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
    
    return JSON.stringify(dateObj);
}