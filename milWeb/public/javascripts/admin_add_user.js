
async function sha256(message) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function submitForm(event) {
    event.preventDefault();

    // Fetch and hash the username and password using SHA-256
    const hashedUsername = await sha256(document.getElementById("username").value);
    const hashedPassword = await sha256(document.getElementById("password").value);
    const permissionLevel = document.getElementById("permissionLevel").value;

    sendToPage(hashedUsername, hashedPassword, permissionLevel);
};

document.getElementById("loginForm").addEventListener("submit", submitForm);

async function sendToPage(username, password, permissionLevel) {
    const response = await fetch('/admin/add_user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, permissionLevel })
    });

    const result = await response.json();

    if (response.ok) {
        alert("User added successfully: " + result.error); // Display error message
    } else {
        alert("Something went wrong: " + result.error); // Display error message
    }
}