const database = require('../database.js');
const config = require('../../config.json');
const encryptioncode = config.database.encryptioncode;

const sha256 = require('../functions/sha256.js');

const add_user_login_query = `
INSERT INTO login (user_id, soldier_id, soldier_password, salt) 
VALUES (?, AES_ENCRYPT(?, ?), AES_ENCRYPT(?, ?), AES_ENCRYPT(?, ?))
`;

const add_user_soldier_query = `
INSERT INTO soldier (user_id, status, callsign, permission) 
VALUES (?, AES_ENCRYPT(?, ?), AES_ENCRYPT(?, ?), AES_ENCRYPT(?, ?))
`;

async function add_userFunc(req, res) {
    const { username, password, callsign, permissionLevel } = req.body;
    
    //add user to login table
    const salt = await generateSalt();

    const [crypUsername, crypPassword] = [await sha256(username), await sha256(password + salt)]; 
    
    const highest_id = await getHighestUserID();

    const soldier_id = highest_id+1;

    const add_user_login_params = [
        soldier_id, 
        crypUsername,encryptioncode, 
        crypPassword,encryptioncode, 
        salt,encryptioncode
    ];

    await database.query(add_user_login_query, add_user_login_params);

    //add user to soldier table
    const soldier_status = 'active';

    const add_user_soldier_params = [
        soldier_id, 
        soldier_status,encryptioncode, 
        callsign,encryptioncode, 
        permissionLevel,encryptioncode
    ];

    await database.query(add_user_soldier_query, add_user_soldier_params);

    return res.json({ message: "Login successful" });
    
    //res.status(401).json({ error: "Invalid credentials" });
}



async function getHighestUserID() {
    const [rows] = await database.query('SELECT MAX(user_id) AS highest_id FROM login');
    const highest_id = rows[0].highest_id || 0;
    return highest_id;
}

async function generateSalt(length = 16) {
    const charset = '0123456789abcdef';
    let salt = '';
    for(let i = 0; i < length; i++) {
        salt += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return salt;
}


/*
SELECT CAST(AES_DECRYPT(soldier_id, 'MIVMIV') AS CHAR) AS decrypted_soldier_id, CAST(AES_DECRYPT(soldier_password, 'MIVMIV') AS CHAR) AS decrypted_soldier_password, CAST(AES_DECRYPT(salt, 'MIVMIV') AS CHAR) AS decrypted_salt
FROM login
WHERE user_id = '2';
*/


//export the function so other files can use it
module.exports = add_userFunc; 