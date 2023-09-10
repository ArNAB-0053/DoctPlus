function showAlert(message) {
    var customAlert = document.getElementById("custom-alert");
    var customAlertMessage = document.getElementById(
        "custom-alert-message"
    );
    var customAlertClose =
        document.getElementById("custom-alert-close");

    customAlertClose.style.display = "none";

    // Set the message text
    customAlertMessage.textContent = message;

    // Show the custom alert box
    customAlert.style.display = "block";

    // Close the custom alert box when the OK button is clicked
    customAlertClose.addEventListener("click", function () {
        customAlert.style.display = "none";
    });
}

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAY0DWLKM7e0M4bjdF58i4gfiG3c8IhTCA",
    authDomain: "projectdiseasepredictor.firebaseapp.com",
    projectId: "projectdiseasepredictor",
    storageBucket: "projectdiseasepredictor.appspot.com",
    messagingSenderId: "947196362135",
    appId: "1:947196362135:web:0b373104638bf8ec0118d2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth();
const database = firebase.database();

// Set up our register function
function register() {
    // Get all our input fields
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    full_name = document.getElementById("name").value;
    mobile = document.getElementById("mobile").value;

    // Check if the "Sign Up" button is pressed
    var isSignUpButtonPressed = document.activeElement.id === "signupbtn";

    // Validate input fields
    if (
        email === "" ||
        password === "" ||
        full_name === "" ||
        mobile === "" ||
        (email === "" &&
            password === "" &&
            full_name === "" &&
            mobile === "" &&
            isSignUpButtonPressed)
    ) {
        // alert("Please fill in all the fields");
        return;
    }

    // Validate input fields
    if (
        validate_email(email) == false ||
        validate_password(password) == false
    ) {
        return;
        // Don't continue running the code
    }
    if (
        validate_field(full_name) == false ||
        validate_field(mobile) == false
    ) {
        return;
    }

    // Move on with Auth
    auth
        .createUserWithEmailAndPassword(email, password)
        .then(function () {
            // Declare user variable
            var user = auth.currentUser;

            // Add this user to Firebase Database
            var database_ref = database.ref();

            // Create User data
            var user_data = {
                email: email,
                name: full_name,
                mobile: mobile,
                password: password,
                last_login: Date.now(),
            };

            // console.log("User data before saving:", user_data);

            // Push to Firebase Database
            database_ref.child("users/" + user.uid).set(user_data);

            // console.log("User data after saving:", user_data);
            setTimeout(function () {
                location.reload(); // Refresh the form after a short delay
            }, 2000);

            // Done
            showAlert("Sign Up Successfully!!");
        })
        .catch(function (error) {
            // Firebase will use this to alert of its errors
            var error_code = error.code;
            var error_message = error.message;

            alert(error_message);
        });
}

// Set up our login function
function login() {
    // Get all our input fields
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    // Check if the "Sign In" button is pressed
    var isSigninButtonPressed = document.activeElement.id === "signinbtn";

    // Validate input fields
    if (
        email === "" ||
        password === "" ||
        (email === "" && password === "" && isSigninButtonPressed)
    ) {
        //showAlert("Please fill in all the fields");
        return;
    }

    // Validate input fields
    if (
        validate_email(email) == false ||
        validate_password(password) == false
    ) {
        return;
        // Don't continue running the code
    }

    auth
        .signInWithEmailAndPassword(email, password)
        .then(function () {
            // Declare user variable
            var user = auth.currentUser;

            // Add this user to Firebase Database
            var database_ref = database.ref();

            // Create User data
            var user_data = {
                last_login: Date.now(),
            };

            // console.log("User data before saving:", user_data);

            // Push to Firebase Database
            database_ref.child("users/" + user.uid).set(user_data);

            // console.log("User data after saving:", user_data);
            setTimeout(function () {
                location.reload(); // Refresh the form after a short delay
            }, 2000);

            // DOne
            showAlert("Log In Successfully!!");
            window.location.href = "/profile";
        })
        .catch(function (error) {
            // Firebase will use this to alert of its errors
            var error_code = error.code;
            var error_message = error.message;

            alert(error_message);
        });
}

// Set up our signout function
function signout() {
    auth
        .signOut()
        .then(function () {
            // Sign out successful
            showAlert("Sign Out Successfully!!");
            // Redirect to homepage or desired page after signout
            window.location.href = "/";
        })
        .catch(function (error) {
            // An error occurred
            alert(error.message);
        });
}

// Validate Functions
function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/;
    if (expression.test(email) == true) {
        // Email is good
        return true;
    } else {
        // Email is not good
        return false;
    }
}

function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
        return false;
    } else {
        return true;
    }
}

function validate_field(field) {
    if (field == null) {
        return false;
    }

    if (field.length <= 0) {
        return false;
    } else {
        return true;
    }
}

// Add an authentication state change listener
auth.onAuthStateChanged(function (user) {
    var signupSection = document.getElementById("signupSection");
    var divProfile = document.getElementById("divProfile");
    if (user) {
        // User is signed in
        signupSection.style.display = "none";
        divProfile.style.display = "block";
    } else {
        // User is signed out
        signupSection.style.display = "block";
        divProfile.style.display = "none";
    }
});

// Add an authentication state change listener for mobile(Responsive)
auth.onAuthStateChanged(function (user) {
    var signupSectionR = document.getElementById("signupSectionR");
    var signoutButtonR = document.getElementById("signoutButtonR");
    var divProfileR = document.getElementById("divProfileR");
    if (user) {
        // User is signed in
        signupSectionR.style.display = "none";
        divProfileR.style.display = "block";
    } else {
        // User is signed out
        signupSectionR.style.display = "block";
        divProfileR.style.display = "none";
    }
});