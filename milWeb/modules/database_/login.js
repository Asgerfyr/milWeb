const database = require('../database.js');
const config = require('../../config.json');
const encryptioncode = config.database.encryptioncode;

const sha256 = require('../functions/sha256.js');

// få information fra packade

// er brugeren i databasen?
// hvis nej => send 401 Invalid credentials

// få password og salt fra databasen
// tilføj salt til sendt password
// hash det og sammenlign med password fra databasen
// hvis ja => 
// sæt session.user til username og userId
// send 200 og redirect til main site


/*
SELECT CAST(AES_DECRYPT(soldier_id, 'MIVMIV') AS CHAR) AS decrypted_soldier_id, CAST(AES_DECRYPT(soldier_password, 'MIVMIV') AS CHAR) AS decrypted_soldier_password, CAST(AES_DECRYPT(salt, 'MIVMIV') AS CHAR) AS decrypted_salt
    FROM login
    WHERE user_id = '2';
    */

async function login(req, res) {
    const { username, password } = req.body;

    if(!(/^[0-9abcdef]+$/.test(username)) || !(/^[0-9abcdef]+$/.test(password))) res.status(401).json({ error: "Invalid credentials" });
    // the code over checks if the string only contains hex characters
    // It uses regular expressions to do this
    // .test(username) returns true if the regular expression matches
    // /^[0-9abcdefg]+$/ This is the regular expression
    //##
    // the / marks the start and end of the regular expression /../
    //##
    // ^ marks the start of the string and $ marks the end
    // so the regular expression starts at the start of the string and ends at the end of the string
    // alternatively the string could start at a specific character of index excluding all characters before it
    //##
    // [0-9abcdefg] This makes a valid regular expression if the character is a number, a letter from a to f
    // in this case it only checks only for one character
    // so if the string is longer than one character it will not be a valid regular expression
    //##
    // + means that the regular expression can be repeated one or more times
    // So + will make this [0-9abcdefg] repeat for one or more times
    // also meaning from start to the end of the string or from ^ to $
    //##
    // The result of the test is then negated by using !    

    const soldier_Username = await sha256(username);

    const result = await getUserInfo(soldier_Username); 
    if(!result)return res.status(401).json({ error: "Invalid credentials" });

    const [soldier_password ,soldier_salt , soldier_user_id] = result
    

    if (soldier_password == await sha256(password+soldier_salt)) {
        
        const soldier_callsign = await getCallsign(soldier_user_id);

        req.session.user = { soldier_callsign };
        console.log("Login successful for user_ID:", soldier_user_id);
        req.session.userId = soldier_user_id;
        
        return res.json({ message: "Login successful" });
    }
    return res.status(401).json({ error: "Invalid credentials" });
}

async function getUserInfo(username){
    //const query = "SELECT CAST(AES_DECRYPT(user_id, 'MIVMIV') AS CHAR) AS user_id, CAST(AES_DECRYPT(soldier_password, 'MIVMIV') AS CHAR) AS password, CAST(AES_DECRYPT(salt, 'MIVMIV') AS CHAR) AS salt FROM login WHERE CAST(AES_DECRYPT(soldier_id, 'MIVMIV') AS CHAR) = ?;"
    const query = "SELECT user_id, CAST(AES_DECRYPT(soldier_password, ?) AS CHAR) AS password, CAST(AES_DECRYPT(salt, ?) AS CHAR) AS salt FROM login WHERE CAST(AES_DECRYPT(soldier_id, ?) AS CHAR) = ?"
    
    const [rows] = await database.query(query,[encryptioncode,encryptioncode,encryptioncode,username]);
    if(rows.length == 0 || rows.length > 1) return;

    const data = rows[0];

    return [data.password , data.salt, data.user_id];
}

async function getCallsign(user_id){
    return "dickman";
}


//export the function so other files can use it
module.exports = login; 