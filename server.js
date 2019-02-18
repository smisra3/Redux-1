const express = require('express');
const app = express();
const mongoose = require('mongoose');
const server = require('http').createServer(app);

mongoose.set('useFindAndModify');
mongoose.Promise = global.Promise;
/* Config base de datos */

app.post('/auth-users', (req,res) => {
    console.log(req.body);
});
server.listen(3000,function() {
    console.log('Server corriendo en puerto 3000');
});

