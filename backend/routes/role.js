const router = require('express').Router();
const mongoose = require('mongoose');

const Role = require('../models/role');

router.get('/', (req, res) => {
    Role.find({}).then(data => {
        console.log(res.data);
        res.send(data);
    });
});

router.get('/:id', (req, res) => {
    Role.findById(req.params.id).then(data => {
        if (!data) return res.status(404).send(`No existe un rol con _id: ${req.params.id}`)
        res.send(data);
    })
});

module.exports = router;
