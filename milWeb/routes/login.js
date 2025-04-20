const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'login.html'));
});


// Dummy User Data (Replace with a real database) ######################################################################
const users = { "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918": "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918",
    "57b6c3bcc81dd2a6595aba6f9697bda014b2c57301c5745ff924c60dc2a97cb0": "57b6c3bcc81dd2a6595aba6f9697bda014b2c57301c5745ff924c60dc2a97cb0"
};

const permissionUsers = {"8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918":2,
"57b6c3bcc81dd2a6595aba6f9697bda014b2c57301c5745ff924c60dc2a97cb0":1,
};

// Authentication Route (Login)
router.post('/', (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    
    if (users[username] && users[username] === password) {
        req.session.user = { username };
        req.session.userId = username;
        console.log(req.session.user);
        return res.json({ message: "Login successful" });
    }
    console.log("Invalid credentials");
    res.status(401).json({ error: "Invalid credentials" });
});



module.exports = router;