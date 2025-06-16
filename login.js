// Hardcoded username and password (For demo purposes only)
const validUsername = "ppp";
const validPassword = "qwertyuiop"; // Never use plain text passwords in production

// Event listener for the login form submission
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission to handle validation manually

    // Get the username and password input values
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Check if the entered username and password match the valid credentials
    if (username === validUsername && password === validPassword) {
        // ✅ Store authentication token
        localStorage.setItem('authToken', 'secure_token_here');

        // ✅ Store login time and status in session storage (optional)
        sessionStorage.setItem("loggedIn", true);
        sessionStorage.setItem("loginTime", Date.now());

        // ✅ Redirect to the dashboard after successful login
        window.location.href = "dashboard.html";
    } else {
        // Show error message if credentials are incorrect
        document.getElementById("error-message").style.display = "block";
    }
});
