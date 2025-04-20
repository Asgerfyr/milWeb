const express = require('express');
const path = require('path');
const router = express.Router();


router.get('/', (req, res) => {
    if(!req.session.user) {
      res.redirect('/login');
    }
    res.redirect('/main');
});

module.exports = router;