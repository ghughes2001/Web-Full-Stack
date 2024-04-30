const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const server = require('http').Server(aop);
const port = 3000;
const helmet = require('helmet');
const { request } = require('http');
const registerLoginCredentials = require('./db/services/registerService');
const validateLoginCredentials = require('./db/services/loginServices');
const { createAccountDetails, getAccountDetails } = require('./db/services/accountServices');

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(
    (request, response, next) => {
        console.log("A new request received at " + new Date(Date.now()));
        next();
    }
);

app.post('/login', (request, response) => {
    const body = request.body;
    console.log('body: ', body);
    validateLoginCredentials(request, response);
});
app.post('/register', (request, response) => {
    const body = request.body;
    registerLoginCredentials(request, response);
    console.log('body: ', body);
});
app.get('/account', (request, response) => {
    const body = request.body;
    console.log('body: ', body);
    getAccountDetails(request, response);
});
app.put('/account', (request, response) => {
    const body = request.body;
    console.log('body: ', body);
    putAccountDetails(request, response);
});
app.post('/account', (request, response) => {
    const body = request.body;
    console.log('body: ', body);
    createAccountDetails(request, response);
});

server.listen(port, () => {
});

module.exports = server;