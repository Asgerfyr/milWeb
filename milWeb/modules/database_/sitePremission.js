//0 user that dosent exist on premission list
//1 user that is a soldier
//2 user that is a general
//3 user that is a admin

//if a site isn't on the list it will be open to all users also non users

const sitePermissionLevels = {"/general":[2,3],"/soldier":[1,2,3],"/admin":[3]};

function permissionLevel(site) {
    if(!sitePermissionLevels[site]) return false; // Default to open access if site is not listed
    return sitePermissionLevels[site];
}


module.exports = { permissionLevel };
