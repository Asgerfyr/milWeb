const database = require('../database.js');
const config = require('../../config.json');
const encryptioncode = config.database.encryptioncode;

const add_mission_query = `
INSERT INTO mission (mission_id, name, description) 
VALUES (?, AES_ENCRYPT(?, ?), AES_ENCRYPT(?, ?))
`;

async function add_missionFunc(req, res) {
    const { name, description} = req.body;

    const highest_id = await getHighestMissionID();

    const mission_id = highest_id+1;

    const add_mission_params = [
        mission_id, 
        name,encryptioncode, 
        description,encryptioncode
    ];

    await database.query(add_mission_query, add_mission_params);

    return res.json({ message: "Mission oprettet" });
    
    //res.status(401).json({ error: "Invalid credentials" });
}



async function getHighestMissionID() {
    const [rows] = await database.query('SELECT MAX(mission_id) AS highest_id FROM mission');
    const highest_id = rows[0].highest_id || 0;
    return highest_id;
}

//export the function so other files can use it
module.exports = add_missionFunc; 