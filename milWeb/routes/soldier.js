const express = require('express');
const path = require('path');
const router = express.Router();

// get route for the general page
router.get('/' ,(req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'soldier_page.html'));
});

//export the object so other files can use it
module.exports = router;