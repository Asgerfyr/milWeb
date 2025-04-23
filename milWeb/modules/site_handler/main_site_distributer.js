const path = require('path');
const permissionUsers = require('../database_/userPermission.js');

async function mainGetPage(req, res) {
    switch( await permissionUsers(req.session.userId)) {
        
        case 2:
        res.redirect('/general');
        break;
        
        case 1:
        res.redirect('/soldier');
        break;

        default:
        res.status(401).sendFile(path.join(__dirname, '../../public', '401.html'));
        break;
    }
}

//export the object so other files can use it
module.exports = mainGetPage;