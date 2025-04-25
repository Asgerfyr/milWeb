const database = require('../database.js');
const config = require('../../config.json');
const encryptioncode = config.database.encryptioncode;

const add_location_query = `
INSERT INTO squad_location (squad_id, latitude, longitude, time) 
VALUES (?, AES_ENCRYPT(?, ?), AES_ENCRYPT(?, ?), AES_ENCRYPT(?, ?))
`;

async function add_locationFunc(req, res) {
    const { squad_callsign, latitude, longitude} = req.body;

    const Squad_id = await getSquadID(squad_callsign);

    if(!Squad_id) return res.status(401).json({ error: "No squad found or multiple squads found" });

    const now = new Date().toISOString();

    console.log(latitude,longitude);

    const add_location_params = [
        Squad_id, 
        latitude.toString(),encryptioncode, 
        longitude.toString(),encryptioncode,
        now,encryptioncode
    ];

    await database.query(add_location_query, add_location_params);

    return res.json({ message: "location oprettet" });
    
    //res.status(401).json({ error: "Invalid credentials" });
}



async function getSquadID(callsign) {
    const [rows] = await database.query('SELECT squad_id AS id FROM squad Where AES_DECRYPT(callsign, ?) = ?',[encryptioncode, callsign]);
    if(rows.length == 0 || rows.length > 1) return false;
    const id = rows[0].id;
    return id;
}

//export the function so other files can use it
module.exports = add_locationFunc; 