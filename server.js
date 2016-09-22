/* global __dirname */
/* set up
 ================================================================== */
var express = require('express');
var app = express();
var port = process.env.PORT || 8082;
var morgan = require('morgan');


/* configuration
 ================================================================== */
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console


/* listen (start app with node server.js)
 ================================================================== */
app.listen(port);
console.log("Express server running at => http://localhost:" + port + "/\nCtrl (Cmd) + C to shutdown");
