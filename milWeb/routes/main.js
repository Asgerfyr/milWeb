const express = require('express');
const path = require('path');
const router = express.Router();

const mainDistributer = require('../modules/site_handler/main_site_distributer.js');

// Protected Route (Dashboard)
router.get('/', (req, res) => {
  mainDistributer(req, res);
});

module.exports = router;