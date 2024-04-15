const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const server = require('http').Server(aop);
const port = 3000;
const helmet = require('helmet');
const { request } = require('http');

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
    response.status(200).json({ ...body, path: "/login", method: "POST" });
});
app.post('/register', (request, response) => {
    const body = request.body;
    console.log('body: ', body);
    response.status(201).json({ ...body, path: "/register", method: "POST" })
});
app.post('/account', (request, response) => {
    const body = request.body;
    console.log('body: ', body);
    response.status(200).json({ ...body, path: "/account", method: "POST" });
});

server.listen(port, () => {
});

module.exports = server;