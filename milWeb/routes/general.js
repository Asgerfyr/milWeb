const express = require('express');
const path = require('path');
const router = express.Router();

// get route for the general page
router.get('/' ,(req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'general_page.html'));
});


// get route for the general page
router.get('/get_data' ,(req, res) => {
    res.sendFile(path.join(__dirname, '../modules/database_', 'data.json'));
});

//export the object so other files can use it
module.exports = router;