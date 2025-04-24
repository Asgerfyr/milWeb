const database = require('../database.js');
const config = require('../../config.json');
const encryptioncode = config.database.encryptioncode;

//0 user that dosent exist on premission list
//1 user that is a soldier
//2 user that is a general
//3 user that is a admin

async function permissionLevel(user_id) {
  const query = "SELECT CAST(AES_DECRYPT(permission, ?) AS CHAR) AS permission FROM soldier WHERE user_id = ?"

  const [rows] = await database.query(query,[encryptioncode, user_id]);

  if(rows.length == 0 || rows.length > 1) return 0;

  const data = rows[0];

  return parseInt(data.permission,10) || 0;

}

//export the object so other files can use it
module.exports = permissionLevel;