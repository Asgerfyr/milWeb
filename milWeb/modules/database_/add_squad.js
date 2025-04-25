const database = require('../database.js');
const config = require('../../config.json');
const encryptioncode = config.database.encryptioncode;

const add_squad_query = `
INSERT INTO squad (squad_id, mission_id, callsign, weapon_status, food_status, general_status) 
VALUES (?, ?, AES_ENCRYPT(?, ?), AES_ENCRYPT(?, ?), AES_ENCRYPT(?, ?), AES_ENCRYPT(?, ?))
`;

async function add_squadFunc(req, res) {
    const { callsign, weapon_status, food_status, general_status, attached_mission_name} = req.body;

    const highest_id = await getHighestSquadID();

    const squad_id = highest_id+1;

    const mission_id = await getMissionID(attached_mission_name);
    if(!mission_id) return res.status(401).json({ error: "No mission found or multiple missions found" });

    const add_squad_params = [
        squad_id, 
        mission_id,
        callsign,encryptioncode, 
        weapon_status,encryptioncode, 
        food_status,encryptioncode, 
        general_status,encryptioncode
    ];

    await database.query(add_squad_query, add_squad_params);

    return res.json({ message: "squad oprettet" });
    
    //res.status(401).json({ error: "Invalid credentials" });
}



async function getHighestSquadID() {
    const [rows] = await database.query('SELECT MAX(squad_id) AS highest_id FROM squad');
    const highest_id = rows[0].highest_id || 0;
    return highest_id;
}

async function getMissionID(mission_name) {
    const [rows] = await database.query('SELECT mission_id AS id FROM mission Where AES_DECRYPT(name, ?) = ?',[encryptioncode, mission_name]);
    if(rows.length == 0 || rows.length > 1) return false;
    const id = rows[0].id;
    return id;
}

//export the function so other files can use it
module.exports = add_squadFunc; 