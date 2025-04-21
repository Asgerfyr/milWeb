//0 user that dosent exist on premission list
//1 user that is a soldier
//2 user that is a general
//3 user that is a admin


const permissionUsers = {"8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918":2,
    "57b6c3bcc81dd2a6595aba6f9697bda014b2c57301c5745ff924c60dc2a97cb0":1,
    "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4":3,
  };

function permissionLevel(userId) {
  return permissionUsers[userId] || 0;
}

//export the object so other files can use it
module.exports = { permissionLevel };