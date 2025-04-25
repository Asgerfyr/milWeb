
async function submitForm(event) {
    event.preventDefault();

    // Fetch and hash the username and password using SHA-256
    const squad_callsign = document.getElementById("squad_callsign").value;
    const latitude = document.getElementById("latitude").value;
    const longitude = document.getElementById("longitude").value;

    sendToPage(squad_callsign, latitude, longitude);
};

async function sendToPage(squad_callsign, latitude, longitude) {
    const response = await fetch('/soldier/add_location', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({squad_callsign, latitude, longitude})
    });

    const result = await response.json();

    if (response.ok) {
        alert("location added successfully: " + result.error); // Display error message
    } else {
        alert("Something went wrong: " + result.error); // Display error message
    }
}