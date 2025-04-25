const express = require('express');
const path = require('path');
const router = express.Router();

// get route for the general page
router.get('/' ,(req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'soldier_page.html'));
});

// get route for the general page
router.get('/add_location' ,(req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'soldier_page_add_location.html'));
});



// get login function that handles add logic
const add_locationFunc = require('../modules/database_/add_location.js');

// Authentication Route (Login)
router.post('/add_location', (req, res) => {
    add_locationFunc(req, res);
});

//export the object so other files can use it
module.exports = router;