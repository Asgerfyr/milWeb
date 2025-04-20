const sitePermissionLevels = {"/general":2,"/soldier":1};

const permissionUsers = {"8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918":2,
  "57b6c3bcc81dd2a6595aba6f9697bda014b2c57301c5745ff924c60dc2a97cb0":1,
};

function isAuthenticated(req, res, next) {
  if (req.session.user) {
    if(!sitePermissionLevels[req.originalUrl])return next();
    if(permissionUsers[req.session.userId] == sitePermissionLevels[req.originalUrl])return next();
    res.status(403).sendFile(path.join(__dirname, 'public', 'unauthorized.html'));
  }
  res.status(401).sendFile(path.join(__dirname, 'public', 'unauthorized.html'));
}

module.exports = { isAuthenticated };

