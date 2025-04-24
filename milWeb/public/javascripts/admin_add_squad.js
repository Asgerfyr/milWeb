
async function submitForm(event) {
    event.preventDefault();

    // Fetch and hash the username and password using SHA-256
    const callsign = document.getElementById("callsign").value;
    const weapon_status = document.getElementById("weapon_status").value;
    const food_status = document.getElementById("food_status").value;
    const general_status = document.getElementById("general_status").value;
    const attached_mission_name = document.getElementById("attached_mission_name").value;

    sendToPage(callsign, weapon_status, food_status, general_status, attached_mission_name);
};

async function sendToPage(callsign, weapon_status, food_status, general_status, attached_mission_name) {
    const response = await fetch('/admin/add_squad', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ callsign, weapon_status, food_status, general_status, attached_mission_name })
    });

    const result = await response.json();

    if (response.ok) {
        alert("Mission added successfully: " + result.error); // Display error message
    } else {
        alert("Something went wrong: " + result.error); // Display error message
    }
}