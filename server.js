const express = require('express');
const http = require('http'); 
const path = require('path');
const cors = require('cors'); 

const app = express(); 
const port = process.env.PORT || 4200

var allowedOrigins = 'http://localhost:4200/carte';
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(express.static(__dirname + '/dist/restaurantangular')); 

app.get('/*', function(req, res) {
    res.sendfile(path.join(__dirname)); // load the single view file (angular will handle the page changes on the front-end)
});

const server = http.createServer(app); 

server.listen(port, () => {
    console.log('Server started!');
});