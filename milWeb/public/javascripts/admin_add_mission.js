
async function submitForm(event) {
    event.preventDefault();

    // Fetch and hash the username and password using SHA-256
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;

    sendToPage(name, description);
};

async function sendToPage(name, description) {
    const response = await fetch('/admin/add_mission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description })
    });

    const result = await response.json();

    if (response.ok) {
        alert("Mission added successfully: " + result.error); // Display error message
    } else {
        alert("Something went wrong: " + result.error); // Display error message
    }
}