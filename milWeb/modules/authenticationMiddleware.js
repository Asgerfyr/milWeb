
const path = require('path');
const userPermission = require('./database_/userPermission.js');
const sitePermission = require('./database_/sitePermission.js');

function isAuthenticated(req, res, next) {
  if(!sitePermission.permissionLevel(req.originalUrl))return next();
  if (req.session.user) {
    if(sitePermission.permissionLevel(req.originalUrl).includes(userPermission.permissionLevel(req.session.userId)))return next();
    res.status(403).sendFile(path.join(__dirname, '../public', 'unauthorized.html'));
  }
  res.status(401).sendFile(path.join(__dirname, '../public', 'unauthorized.html'));
}

//export the function so other files can use it
module.exports = isAuthenticated;

