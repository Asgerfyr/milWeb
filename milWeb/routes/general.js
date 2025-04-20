const express = require('express');
const path = require('path');
const router = express.Router();

// Logout get route
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'general_page.html'));
});

module.exports = router;