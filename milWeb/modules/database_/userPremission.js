


const permissionUsers = {"8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918":2,
    "57b6c3bcc81dd2a6595aba6f9697bda014b2c57301c5745ff924c60dc2a97cb0":1,
  };

function permissionLevel(userId) {
  return permissionUsers[userId] || 0;
}


module.exports = { permissionLevel };