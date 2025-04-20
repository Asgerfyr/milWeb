const express = require('express');
const path = require('path');
const router = express.Router();

// Logout get route
router.get('/', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).send("Logout failed");
    res.sendFile(path.join(__dirname, '../public', 'logout.html'));
  });
});

// Logout post route
router.post('/', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).send("Logout failed");
    res.sendFile(path.join(__dirname, '../public', 'logout.html'));
  });
});

module.exports = router;