const express = require('express');
const path = require('path');
const router = express.Router();

// get route for login page
router.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '../public', 'login.html'));
});

// get login function that handles login logic
const loginFunc = require('../modules/database_/login.js');

// Authentication Route (Login)
router.post('/', (req, res) => {
  return loginFunc(req, res);
});

//export the object so other files can use it
module.exports = router;