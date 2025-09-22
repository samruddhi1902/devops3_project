// A simple function to simulate a login attempt
function handleLogin(username, password) {
    // Select the HTML elements we will be interacting with
    const statusMessage = document.getElementById('login-status');
    const loginForm = document.getElementById('login-form');

    // Clear any previous status messages
    statusMessage.textContent = 'Logging in...';
    statusMessage.style.color = 'blue';

    // Simulate a network delay of 1.5 seconds
    setTimeout(() => {
        // Dummy credentials for testing
        const validUsername = 'admin';
        const validPassword = 'password123';

        // Check if the entered credentials match the dummy ones
        if (username === validUsername && password === validPassword) {
            // Success case: show a success message
            statusMessage.textContent = 'Login successful!';
            statusMessage.style.color = 'green';
            console.log('User logged in successfully!');

            // Optional: Redirect the user or hide the form
            loginForm.style.display = 'none';
        } else {
            // Error case: show an error message
            statusMessage.textContent = 'Invalid username or password.';
            statusMessage.style.color = 'red';
            console.error('Login failed: Invalid credentials.');
        }
    }, 1500); // 1500 milliseconds = 1.5 seconds
}

// Event listener for the login form submission
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    
    // Add an event listener to the form to handle the submit action
    loginForm.addEventListener('submit', (event) => {
        // Prevent the form from submitting and reloading the page
        event.preventDefault();

        // Get the values from the input fields
        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;

        // Call the login function with the user's input
        handleLogin(usernameInput, passwordInput);
    });
});