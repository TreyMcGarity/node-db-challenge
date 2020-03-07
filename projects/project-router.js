const express = require('express');

const db = require('./project-model');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: "You're here"
    })
});

module.exports = router;