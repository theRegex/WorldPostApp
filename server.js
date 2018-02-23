
const express = require('express');
//const subdomain = require('express-subdomain');
const fs = require('fs');
const path = require('path');
const hostname = 'localhost';
const port = 8001;
const vhost = require('vhost');
//const router = express.Router();
const app = express();

app.use(express.static('public'))

app.use('/', function (req, res) {
		res.sendFile(__dirname + '/index.html');
});

// app.use(vhost('worldposts.com', function (req, res) {
// 		res.sendFile(__dirname + '/index.html');
// }));

app.listen(port, () => {
    console.log(`
        Server is running at http://${hostname}:${port}/ 
        Server hostname ${hostname} is listening on port ${port}!
    `);
});

