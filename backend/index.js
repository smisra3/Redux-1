const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;
const mongoose = require('./config/mongose');

app.use(bodyParser.json());

app.use('/role', require('./routes/role'));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});
