const database = require('../database.js');
const config = require('../../config.json');
const encryptioncode = config.database.encryptioncode;



async function get_map_dataFunc(req, res) {
    //how is asking
    //premission check
    //soldier show limitet
    //general show full
    //admin show full
    //return map data

    get_full_map_data(req, res);

}

const data = require('./data.json');

async function get_full_map_data(req, res){

    const squad_locations = await getAllSquadLocations();//get all squads newest locations


    const squad_details = await getAllSquadDetails(squad_locations);//get all squads details½ 

    const newdata = [...data, ...squad_details];

    return res.json(newdata);
}

const get_all_squad_locations_query = `
SELECT 
    loc1.squad_id, 
    AES_DECRYPT(loc1.latitude, ?) AS latitude, 
    AES_DECRYPT(loc1.longitude, ?) AS longitude, 
    AES_DECRYPT(loc1.time, ?) AS time 
FROM squad_location loc1
JOIN (
    SELECT squad_id, MAX(AES_DECRYPT(time, ?)) AS max_time 
    FROM squad_location
    GROUP BY squad_id
) loc2 
ON loc1.squad_id = loc2.squad_id 
   AND AES_DECRYPT(loc1.time, ?) = loc2.max_time;
`;

const get_all_squad_locations_params = [encryptioncode, encryptioncode, encryptioncode, encryptioncode, encryptioncode];

async function getAllSquadLocations(){
    const [rows] = await database.query(get_all_squad_locations_query,get_all_squad_locations_params);
    return rows;
}

const get_squad_info_query = `
SELECT 
    mission_id,
    CAST(AES_DECRYPT(callsign, ?) AS CHAR) AS callsign, 
    CAST(AES_DECRYPT(weapon_status, ?) AS CHAR) AS weapon_status, 
    CAST(AES_DECRYPT(food_status, ?) AS CHAR) AS food_status,
    CAST(AES_DECRYPT(general_status, ?) AS CHAR) AS general_status 
FROM squad
WHERE squad_id = ?;
`;

async function getAllSquadDetails(squad_locations){
    let squad_details = [];
    for (let i = 0; i < squad_locations.length; i++) {
        const current_squad = squad_locations[i];
        const squad_id = current_squad.squad_id;
        const latitude = parseFloat(current_squad.latitude);
        const longitude = parseFloat(current_squad.longitude);
        const time = current_squad.time;

        const get_squad_info_params = [encryptioncode, encryptioncode, encryptioncode, encryptioncode, squad_id];

        const [rows] = await database.query(get_squad_info_query, get_squad_info_params);

        if(rows.length == 0 || rows.length > 1) continue;//no squad found or multiple squads found

        const mission_id = rows[0].mission_id;
        const callsign = rows[0].callsign.toString();
        const weapon_status = rows[0].weapon_status;
        const food_status = rows[0].food_status;
        const general_status = rows[0].general_status;

        squad_details_object = {
            "id": callsign,
            "type": "Friendly",
            "latitude":latitude,
            "longitude":longitude,
            "size": 50,
            "danger_level": "Low",
            "Information": `Squad last report: ${time}, \n Mission ID: ${mission_id}, \n Weapon status: ${weapon_status}, \n Food status: ${food_status}, \n General status: ${general_status}`,
        }
        squad_details.push(squad_details_object);
        
    }
    return squad_details;
}



module.exports = get_map_dataFunc;