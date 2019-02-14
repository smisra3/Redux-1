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

/*
* const app = require('express')();
const bodyParser = require('body-parser');
const port = +process.argv.slice(2)[0] || process.env.PORT || 3001;
const mongoose = require('./config/mongoose');

app.use(bodyParser.json());

app.use('/team', require('./routes/team'));
app.use('/user', require('./routes/user'));
app.use('/role', require('./routes/role'));

app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`));*/