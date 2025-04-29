
const path = require('path');
const userPermission = require('./database_/userPermission.js');
const sitePermission = require('./database_/sitePermission.js');

async function isAuthenticated(req, res, next) {
  //Tjek om siden kræver adgangskontrol
  const site_permissionLevel = sitePermission(req.originalUrl);

  //Hvis siden ikke kræver adgangskontrol returner next
  if(!site_permissionLevel)return next();

  //Hvis brugeren ikke er logget ind send en 401-fejl
  if (!req.session.user) return res.status(401).sendFile(path.join(__dirname, '../public', 'unauthorized.html'));

  //Hent brugerens adgangsniveau
  const user_permissionLevel = await userPermission(req.session.userId);
  //Tjek om brugeren har adgang til siden
  if(site_permissionLevel.includes(user_permissionLevel))return next();
  //Hvis ikke send en 403-fejl
  return res.status(403).sendFile(path.join(__dirname, '../public', 'unauthorized.html'));
  
}

//export the function so other files can use it
module.exports = isAuthenticated;

