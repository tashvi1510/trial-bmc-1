document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Predefined mock credentials
    const mockCredentials = {
        username: "user1",
        password: "password123"
    };

    // Get the values entered by the user
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the credentials match
    if (username === mockCredentials.username && password === mockCredentials.password) {
        window.location.href = "index.html"; // Redirect to homepage on success
    } else {
        document.getElementById('error').textContent = "Invalid username or password!";
        document.getElementById('error').style.color = "red";
    }
});
