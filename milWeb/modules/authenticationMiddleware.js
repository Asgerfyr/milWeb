
const path = require('path');
const userPermission = require('./database_/userPremission.js');
const sitePermission = require('./database_/sitePremission.js');

function isAuthenticated(req, res, next) {
  if(!sitePermission.permissionLevel(req.originalUrl))return next();
  if (req.session.user) {
    if(sitePermission.permissionLevel(req.originalUrl).includes(userPermission.permissionLevel(req.session.userId)))return next();
    res.status(403).sendFile(path.join(__dirname, '../public', 'unauthorized.html'));
  }
  res.status(401).sendFile(path.join(__dirname, '../public', 'unauthorized.html'));
}

module.exports = isAuthenticated;

