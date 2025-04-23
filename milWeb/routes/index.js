const express = require('express');
const path = require('path');
const router = express.Router();

// get route for the main page
router.get('/', (req, res) => {
    if(!req.session.user) {// check if user is logged in
      res.redirect('/login');// redirect to login page if not logged in
      return;
    }
    res.redirect('/main'); // redirect to main page if logged in
    return;
});

//export the object so other files can use it
module.exports = router;