
const path = require('path');
const userPermission = require('./database_/userPermission.js');
const sitePermission = require('./database_/sitePermission.js');

async function isAuthenticated(req, res, next) {
  const user_permissionLevel = await userPermission(req.session.userId);
  const site_permissionLevel = sitePermission(req.originalUrl);

  if(!site_permissionLevel)return next();

  if (req.session.user) {
    if(site_permissionLevel.includes(user_permissionLevel))return next();
    return res.status(403).sendFile(path.join(__dirname, '../public', 'unauthorized.html'));
  }
  return res.status(401).sendFile(path.join(__dirname, '../public', 'unauthorized.html'));
}

//export the function so other files can use it
module.exports = isAuthenticated;

