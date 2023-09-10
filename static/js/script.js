// Function to save user details to localStorage
function saveUserDetails(username, email) {
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
}

// Function to handle sign-up form submission
function handleSignUp(event) {
    event.preventDefault();

    // Get the form values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;

    // Save the user details to localStorage
    saveUserDetails(username, email);

    // Redirect to the profile page
    window.location.href = '/profile';
}

// Add event listener to the sign-up form
document.getElementById('signupForm').addEventListener('submit', handleSignUp);