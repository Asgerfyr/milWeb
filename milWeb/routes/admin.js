const express = require('express');
const path = require('path');
const router = express.Router();

// get route for login page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'admin_add_user.html'));
});

// get login function that handles login logic
const add_userFunc = require('../modules/database_/add_user.js');

// Authentication Route (Login)
router.post('/add_user', (req, res) => {
    add_userFunc(req, res);
});

//export the object so other files can use it
module.exports = router;