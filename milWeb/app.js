var createError = require('http-errors');
var express = require('express');
const session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: 'MIVMIV_I_MIV_1234!MIVMIV',  // Change this to a strong secret key
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }  // Change to `true` if using HTTPS
}));

// Serve static HTML files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));



// Dummy User Data (Replace with a real database) ######################################################################
const users = { "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918": "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918",
  "57b6c3bcc81dd2a6595aba6f9697bda014b2c57301c5745ff924c60dc2a97cb0": "57b6c3bcc81dd2a6595aba6f9697bda014b2c57301c5745ff924c60dc2a97cb0"
 };

const permissionUsers = {"8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918":2,
  "57b6c3bcc81dd2a6595aba6f9697bda014b2c57301c5745ff924c60dc2a97cb0":1,
};


// Authentication Route (Login)
app.post('/login', (req, res) => {
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
//######################################################################################################################

// Middleware to Protect Routes
function isAuthenticated(req, res, next) {
  if (req.session.user) {
      return next();
  }
  res.status(403).sendFile(path.join(__dirname, 'public', 'unauthorized.html'));
}

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Protected Route (Dashboard)
app.get('/main', (req, res) => {
  if(!req.session.user) {
    res.status(401).sendFile(path.join(__dirname, 'public', 'unauthorized.html'));
  }
  mainGetPage(req, res);
});

app.get('/', (req, res) => {
  if(!req.session.user) {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
  }
  mainGetPage(req, res);
});

function mainGetPage(req, res) {
  switch(permissionUsers[req.session.userId]) {
    case 1:
      res.sendFile(path.join(__dirname, 'public', 'soldier_page.html'));
      break;

    case 2:
      res.sendFile(path.join(__dirname, 'public', 'general_page.html'));
      break;

    default:
      res.sendFile(path.join(__dirname, 'public', 'unauthorized.html'));
      break;
  }
}

// Logout Route
app.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).send("Logout failed");
    res.sendFile(path.join(__dirname, 'public', 'logout.html'));
  });
});

app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).send("Logout failed");
    res.sendFile(path.join(__dirname, 'public', 'logout.html'));
  });
});


// Example route (optional, in case you want a custom API route)
app.get('/api', (req, res) => {
    res.json({ message: "Hello from Express API!" });
});

// Error Handling (404)
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'public', '404.html'));
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({
    error: {
      message: err.message,
      status: err.status || 500
    }
  });
});

module.exports = app;


