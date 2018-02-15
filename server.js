var express = require('express');
var bodyParser = require('body-parser');

//setup dev env
if (process.env.NODE_ENV.trim() === "development") {
    require('dotenv').config();
}

//setup server
var port = process.env.PORT || 3001;
var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//add api routes
require('./apiRoutes.js')(app);

//start server
app.listen(port, function() {
    console.log("App listening on PORT " + port);
});