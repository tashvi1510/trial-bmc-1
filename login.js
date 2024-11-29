document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const mockCredentials = {
        username: "user1",
        password: "password123"
    };

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === mockCredentials.username && password === mockCredentials.password) {
        localStorage.setItem('loggedInUser', username); // Store username
        window.location.href = "index.html";
    } else {
        document.getElementById('error').textContent = "Invalid username or password!";
    }
});

// On page load, display the username if logged in
document.addEventListener('DOMContentLoaded', () => {
    const userGreeting = document.getElementById('user-greeting');
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        userGreeting.textContent = `Hello, ${loggedInUser}!`;
    }
});
