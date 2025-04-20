const sitePermissionLevels = {"/general":2,"/soldier":1};

const path = require('path');
const permission = require('./database_/userPremission.js');

function isAuthenticated(req, res, next) {
  if (req.session.user) {
    if(!sitePermissionLevels[req.originalUrl])return next();
    if(permission.permissionLevel(req.session.userId) == sitePermissionLevels[req.originalUrl])return next();
    res.status(403).sendFile(path.join(__dirname, '../public', 'unauthorized.html'));
  }
  res.status(401).sendFile(path.join(__dirname, '../public', 'unauthorized.html'));
}

module.exports = isAuthenticated;

