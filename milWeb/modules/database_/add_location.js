const database = require('../database.js');
const config = require('../../config.json');
const encryptioncode = config.database.encryptioncode;

const add_location_query = `
INSERT INTO squad_location (squad_id, latitude, longitude, time) 
VALUES (?, AES_ENCRYPT(?, ?), AES_ENCRYPT(?, ?), AES_ENCRYPT(?, ?))
`;

async function add_location_soldierFunc(req, res) {
    const { squad_callsign, latitude, longitude} = req.body;

    const now = new Date().toISOString();

    if(await add_location_to_database(squad_callsign, latitude, longitude, now))return res.json({ message: "location oprettet" });
    
    return res.status(401).json({ error: "Error" });
}

async function add_location_generalFunc(squad_callsign, latitude, longitude, res) {

    const now = new Date().toISOString();

    if(await add_location_to_database(squad_callsign, latitude, longitude, now))return res.json({ message: "location oprettet" });
    return res.status(401).json({ error: "Error" });
}


async function add_location_to_database(squad_callsign, latitude, longitude, time) {
    const Squad_id = await getSquadID(squad_callsign);

    if(!Squad_id) return res.status(401).json({ error: "No squad found or multiple squads found" });

    

    const add_location_params = [
        Squad_id, 
        latitude.toString(),encryptioncode, 
        longitude.toString(),encryptioncode,
        time,encryptioncode
    ];

    await database.query(add_location_query, add_location_params);

    return true;
}


async function getSquadID(callsign) {
    const [rows] = await database.query('SELECT squad_id AS id FROM squad Where AES_DECRYPT(callsign, ?) = ?',[encryptioncode, callsign]);
    if(rows.length == 0 || rows.length > 1) return false;
    const id = rows[0].id;
    return id;
}

//export the function so other files can use it
module.exports = {add_location_soldierFunc, add_location_generalFunc}; 