
// get login function that handles add logic
const {add_location_generalFunc } = require('./add_location.js');


function add_generalFunc(req, res) {
    const { type, id, latitude, longitude, size, Information} = req.body;
    switch (type) {
        case "FRIENDLY":
            add_location_generalFunc(id, latitude, longitude, res);
            break;
        default:
            res.status(401).json({ error: "Error" });
            break;
    }
    
}

module.exports = add_generalFunc;