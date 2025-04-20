const session = require('express-session');

module.exports = session({
  secret: 'hemmeligkode',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // true hvis du bruger HTTPS
});
