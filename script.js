document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const userGreeting = document.getElementById("user-greeting");
    const updateForm = document.getElementById("updateForm");

    // Check login state
    const username = localStorage.getItem("username");
    if (username) {
        userGreeting.textContent = `Welcome, ${username}! (Signed In)`;
        unlockFeatures();
    }

    // Login handling
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const usernameInput = document.getElementById("username").value;
            const passwordInput = document.getElementById("password").value;

            if (usernameInput && passwordInput) {
                localStorage.setItem("username", usernameInput);
                localStorage.setItem("password", passwordInput);
                alert("Login successful!");
                window.location.href = "index.html";
            } else {
                alert("Please enter valid credentials.");
            }
        });
    }

    // Unlock features for logged-in users
    function unlockFeatures() {
        const lockedFeatures = document.querySelectorAll(".locked-feature");
        lockedFeatures.forEach((feature) => {
            feature.classList.remove("locked-feature");
            feature.classList.add("unlocked-feature");
        });
    }

    // Update username and password
    if (updateForm) {
        updateForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const newUsername = document.getElementById("new-username").value;
            const newPassword = document.getElementById("new-password").value;

            if (newUsername) localStorage.setItem("username", newUsername);
            if (newPassword) localStorage.setItem("password", newPassword);

            alert("Account updated successfully!");
            window.location.href = "index.html";
        });
    }
});
