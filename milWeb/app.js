var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const sessionMiddleware = require('./modules/session');
app.use(sessionMiddleware);

// Serve static HTML files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));


// Dummy User Data (Replace with a real database) ######################################################################
const permissionUsers = {"8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918":2,
  "57b6c3bcc81dd2a6595aba6f9697bda014b2c57301c5745ff924c60dc2a97cb0":1,
};

const loginRoutes = require('./routes/login.js');

// Authentication Route (Login)
app.use('/login', loginRoutes);

// Protected Route (Dashboard)
app.get('/main', (req, res) => {
  if(!req.session.user) {
    res.status(403).sendFile(path.join(__dirname, 'public', 'unauthorized.html'));
  }
  mainGetPage(req, res);
});

app.get('/', (req, res) => {
  if(!req.session.user) {
    res.redirect('/login');
  }
  mainGetPage(req, res);
});

function mainGetPage(req, res) {
  switch(permissionUsers[req.session.userId]) {
    case 1:
      res.redirect('/soldier');
      break;

    case 2:
      res.redirect('/general');
      break;

    default:
      res.status(401).sendFile(path.join(__dirname, 'public', 'unauthorized.html'));
      break;
  }
}

app.get('/soldier', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'soldier_page.html'));
});

app.get('/general', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'general_page.html'));
});

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


