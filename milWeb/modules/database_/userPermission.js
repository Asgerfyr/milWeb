const database = require('../database.js');
const config = require('../../config.json');
const encryptioncode = config.database.encryptioncode;

//0 user that dosent exist on premission list
//1 user that is a soldier
//2 user that is a general
//3 user that is a admin

async function permissionLevel(user_id) {
  // Lav en query der henter brugerens tilladelser
  const query = "SELECT CAST(AES_DECRYPT(permission, ?) AS CHAR) AS permission FROM soldier WHERE user_id = ?"

  // Kør database med query'en
  const [rows] = await database.query(query,[encryptioncode, user_id]);

  // Hvis der ikke er en bruger fundet, eller der er flere end en bruger fundet, return 0
  if(rows.length == 0 || rows.length > 1) return 0;

  // Hent data fra den første række i resultatet eller den bruger der er hundet til det angivne id
  const data = rows[0];

  // Return er en integer repræsentation af permission
  return parseInt(data.permission,10) || 0;
}

//export the object so other files can use it
module.exports = permissionLevel;