const express = require('express');
const path = require('path');
const router = express.Router();

// get route for add user page
router.get('/add_user', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'admin_add_user.html'));
});

// get route for add mission page
router.get('/add_mission', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'admin_add_mission.html'));
});

// get route for add squad page
router.get('/add_squad', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'admin_add_squad.html'));
});

// get login function that handles add logic
const add_userFunc = require('../modules/database_/add_user.js');

// Authentication Route (Login)
router.post('/add_user', (req, res) => {
    add_userFunc(req, res);
});


// get login function that handles add logic
const add_missionFunc = require('../modules/database_/add_mission.js');

// Authentication Route (Login)
router.post('/add_mission', (req, res) => {
    add_missionFunc(req, res);
});

// get login function that handles add logic
const add_squadFunc = require('../modules/database_/add_squad.js');

// Authentication Route (Login)
router.post('/add_squad', (req, res) => {
    add_squadFunc(req, res);
});


//export the object so other files can use it
module.exports = router;