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

const authentication = require('./modules/authenticationMiddleware.js');

// Serve static HTML files from "public" folder
app.use(authentication, express.static(path.join(__dirname, 'public')));

const indexRoutes = require('./routes/index.js');
const loginRoutes = require('./routes/login.js');
const logoutRoutes = require('./routes/logout.js');
const soldierRoutes = require('./routes/soldier.js');
const generalRoutes = require('./routes/general.js');
const mainRoutes = require('./routes/main.js');

const adminRoutes = require('./routes/admin.js');


app.use('/', authentication, indexRoutes);
app.use('/login', authentication, loginRoutes);
app.use('/logout', authentication, logoutRoutes);
app.use('/soldier', authentication, soldierRoutes);
app.use('/general', authentication, generalRoutes);
app.use('/main', authentication, mainRoutes);

app.use('/admin', authentication, adminRoutes);


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