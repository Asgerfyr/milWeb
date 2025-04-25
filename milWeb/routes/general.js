const express = require('express');
const path = require('path');
const router = express.Router();

// get route for the general page
router.get('/' ,(req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'general_page.html'));
});

// get route for the general page
router.get('/info' ,(req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'general_page_info.html'));
});

// get route for the general page
router.get('/add' ,(req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'general_page_add.html'));
});


const get_map_dataFunc = require('../modules/database_/get_map_data.js');

// get route for the general page
router.get('/get_data' ,(req, res) => {
    get_map_dataFunc(req, res);
});


// get login function that handles add logic
const add_generalFunc = require('../modules/database_/general_add.js');

// get route for the general page
router.post('/add_data', (req, res) => {
    add_generalFunc(req, res);
});

//export the object so other files can use it
module.exports = router;