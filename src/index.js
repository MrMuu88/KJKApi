const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

//define the express app
const app = express();

//add an array as a datastore (temp solution)
const ads= [
    {title:"Hello world 2!"}
];

//adding helmet to enchase your rest Api security
app.use(helmet());

//adding bodyparser to parse json bodies into js objects
app.use(bodyParser.json());

//enabling CORS for all requests
app.use(cors());

//define a get endpoint to return all ads
app.get('/',(req,res) => {
    console.log("request is responded");
    res.send(ads);
});

//starting the server

app.listen(3001, ()=> {
    console.log("server is listening on port 3001");
});
