const path = require('path');
const permissionUsers = require('../database_/userPermission.js');

function mainGetPage(req, res) {
    console.log("test");
    switch(permissionUsers.permissionLevel(req.session.userId)) {
        
        case 2:
        res.redirect('/general');
        break;
        
        case 1:
        res.redirect('/soldier');
        break;

        default:
        console.log("send things");
        res.status(401).sendFile(path.join(__dirname, '../../public', '401.html'));
        break;
    }
}

//export the object so other files can use it
module.exports = mainGetPage;