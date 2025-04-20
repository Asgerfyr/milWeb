const express = require('express');
const path = require('path');
const router = express.Router();

// Protected Route (Dashboard)
router.get('/', (req, res) => {
  if(!req.session.user) {
    res.status(403).sendFile(path.join(__dirname, '../public', 'unauthorized.html'));
  }
  mainGetPage(req, res);
});

// Dummy User Data (Replace with a real database) ######################################################################
const permissionUsers = {"8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918":2,
  "57b6c3bcc81dd2a6595aba6f9697bda014b2c57301c5745ff924c60dc2a97cb0":1,
};

function mainGetPage(req, res) {
  switch(permissionUsers[req.session.userId]) {
    case 1:
      res.redirect('/soldier');
      break;

    case 2:
      res.redirect('/general');
      break;

    default:
      res.status(401).sendFile(path.join(__dirname, '../public', 'unauthorized.html'));
      break;
  }
}

module.exports = router;