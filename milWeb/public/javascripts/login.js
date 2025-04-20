
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

    sendToPage(hashedUsername, hashedPassword);
  
    // Example: Display values (Replace with hashing & API call)
    document.getElementById("hashedUsernameDisplay").textContent = "Hi: " + hashedUsername;
    document.getElementById("hashedPasswordDisplay").textContent = "Hi: " + hashedPassword;
};

document.getElementById("loginForm").addEventListener("submit", submitForm);

async function sendToPage(username, password) {
    const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const result = await response.json();

    if (response.ok) {
        window.location.href = '/main'; // Redirect after successful login
    } else {
        alert("Invalid credentials: " + result.error); // Display error message
    }
}