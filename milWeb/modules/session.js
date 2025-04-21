const session = require('express-session');
const config = require('../config.json');
const secretcode = config.session.secretcode || 'hemmeligkode'; // Use the secret code from config.json

// Create a session middleware using express-session
module.exports = session({
  secret: secretcode,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // true hvis du bruger HTTPS
});
