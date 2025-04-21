//-1 everyone can access the site
//0 user that dosent exist on premission list
//1 user that is a soldier
//2 user that is a general
//3 user that is a admin

//if a site isn't on the list it will be open to all users also non users

const sitePermissionLevels = {
    "/general": [2, 3],
    "/general_page.html": [2, 3],
    "/general_page.js": [2, 3],
    "/general_page.css": [2, 3],
    
    "/soldier": [1, 3],
    "/soldier_page.html": [1, 3],
    "/soldier_page.js": [1, 3],
    "/soldier_page.css": [1, 3],
  
    "/admin": [3],
  };



function permissionLevel(site) {
    if(!sitePermissionLevels[site])return false; // Default to open access if site is not liste

    return sitePermissionLevels[site];
}

//export the object so other files can use it
module.exports = { permissionLevel };
