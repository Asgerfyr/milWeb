const express = require('express');
const path = require('path');
const router = express.Router();

// get route for the general page
router.get('/' ,(req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'general_page.html'));
});


const get_map_dataFunc = require('../modules/database_/get_map_data.js');

// get route for the general page
router.get('/get_data' ,(req, res) => {
    get_map_dataFunc(req, res);
});

//export the object so other files can use it
module.exports = router;