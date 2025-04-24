//-1 everyone can access the site
//0 user that dosent exist on premission list
//1 user that is a soldier
//2 user that is a general
//3 user that is a admin

//if a site isn't on the list it will be open to all users also non users

const sitePermissionLevels = {
    /*"/general": [2, 3], // page
    "/general_page.html": [2, 3], //raw html page
    "/general_page.js": [2, 3], // raw js page
    "/general_page.css": [2, 3], // raw css page
    
    "/soldier": [1, 3], // page
    "/soldier_page.html": [1, 3], //raw html page
    "/soldier_page.js": [1, 3], // raw js page
    "/soldier_page.css": [1, 3], // raw css page
    
    //"/admin": [3], // page
    //"/admin/add_user": [3], // post request
    //"/admin_add_user.html": [3], //raw html page
    //"/admin_add_user.js": [3], // raw js page*/
  };



function permissionLevel(site) {
    if(!sitePermissionLevels[site])return false; // Default to open access if site is not liste

    return sitePermissionLevels[site];
}

//export the object so other files can use it
module.exports = permissionLevel;
