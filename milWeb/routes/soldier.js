const express = require('express');
const path = require('path');
const router = express.Router();

const authentication = require('../modules/authenticationMiddleware.js');

// Logout get route
router.get('/', authentication ,(req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'soldier_page.html'));
});

module.exports = router;