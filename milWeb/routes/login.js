const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'login.html'));
});


const loginFunc = require('../modules/database_/login.js');

// Authentication Route (Login)
router.post('/', (req, res) => {
    loginFunc(req, res);
});


module.exports = router;