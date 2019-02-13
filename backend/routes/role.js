const router = require('express').Router();
const mongoose = require('mongoose');

const role = require('../models/role');

router.get('/', (req, res) => {
    role.find({}).then(data => {
        res.send(data);
    });
});

module.exports = router;