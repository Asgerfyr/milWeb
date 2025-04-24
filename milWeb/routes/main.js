const express = require('express');
const path = require('path');
const router = express.Router();

const mainDistributer = require('../modules/site_handler/main_site_distributer.js');

// Redirect user to the site they have permissions for
router.get('/', (req, res) => {
  if(!req.session.user) {// check if user is logged in
    res.redirect('/login');// redirect to login page if not logged in
    return;
  }
  mainDistributer(req, res);// redirect to the site they have permissions for if logged in
  return;
});

//export the object so other files can use it
module.exports = router;