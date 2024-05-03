const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const server = require('http').Server(app);
const port = 8080;
// const helmet = require('helmet');
const { request } = require('http');
const registerLoginCredentials = require("./db/services/registerService");
const validateLoginCredentials = require("./db/services/loginServices");
const { createAccountDetails } = require("./db/services/accountServices");
const { getAccountDetails } = require("./db/services/accountServices");
const { putAccountDetails } = require("./db/services/accountServices");

// app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(
    (request, response, next) => {
        console.log("A new request received at " + new Date(Date.now()));
        next();
    }
);

app.post('/login', (request, response) => validateLoginCredentials(request, response));
app.post('/register', (request, response) => registerLoginCredentials(request, response));
app.get('/accountGet', (request, response) => getAccountDetails(request, response));
app.put('/accountPut', (request, response) => putAccountDetails(request, response));
app.post('/accountCreate', (request, response) => createAccountDetails(request, response));

server.listen(port, () => {
    console.log("Listening on " + port);
});

module.exports = server;