var firebaseConfig = {
    apiKey: "AIzaSyAY0DWLKM7e0M4bjdF58i4gfiG3c8IhTCA",
    authDomain: "projectdiseasepredictor.firebaseapp.com",
    projectId: "projectdiseasepredictor",
    storageBucket: "projectdiseasepredictor.appspot.com",
    messagingSenderId: "947196362135",
    appId: "1:947196362135:web:0b373104638bf8ec0118d2"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

// Function to get element value by ID
function getElementVal(id) {
    return document.getElementById(id).value;
}

function fetchUserData() {
    auth.onAuthStateChanged(function (user) {
        if (user) {
            var userId = user.uid;
            var userRef = database.ref("users/" + userId);

            userRef.on("value", function (snapshot) {
                var userData = snapshot.val();
                if (userData) {
                    document.getElementById("email").textContent = userData.email;
                    document.getElementById("name").textContent = userData.name;
                    document.getElementById("mobile").textContent = userData.mobile;

                    // Retrieve the image URL from the database
                    var imageURLRef = database.ref("ImagesLinks/" + userId + "/imageURL");
                    imageURLRef.once("value", function (imageURLSnapshot) {
                        var imageURL = imageURLSnapshot.val();
                        if (imageURL) {
                            document.getElementById("myimg").src = imageURL;
                        }
                    });
                    // Retrieve the patient other details from the database
                    var patientDetailsRef = database.ref("PatientDetails/" + userId);
                    patientDetailsRef.on("value", function (patientDetailsSnapshot) {
                        var patientDetails = patientDetailsSnapshot.val();
                        if (patientDetails) {
                            document.getElementById("age").textContent = patientDetails.age;
                            document.getElementById("gender").textContent = patientDetails.gender;
                            document.getElementById("city").textContent = patientDetails.city;
                            document.getElementById("dist").textContent = patientDetails.dist;
                            document.getElementById("pin").textContent = patientDetails.pin;
                            document.getElementById("country").textContent = patientDetails.country;
                            document.getElementById("Fname").textContent = patientDetails.fname;                            
                            document.getElementById("Mname").textContent = patientDetails.mname;
                            document.getElementById("Lname").textContent = patientDetails.lname;
                            document.getElementById("disease").textContent = patientDetails.disease;
                            document.getElementById("height").textContent = patientDetails.height;
                            document.getElementById("DOB").textContent = patientDetails.DOB;
                        }
                    });
                }
            });
        } else {
            // Handle the case when the user is not signed in or there's an error fetching data
            showAlert("User not signed in or data not available.");
        }
    });
    console.log("Fetching user data...");
}

// Call the fetchUserData() function when the profile page is loaded
window.addEventListener("load", function () {
    fetchUserData();
});


// Set up our signout function
function signout() {
    auth.signOut()
        .then(function () {
            // Sign out successful
            showAlert("Sign Out Successfully!!");
            // Redirect to homepage or desired page after signout
            window.location.href = "/";
        })
        .catch(function (error) {
            // An error occurred
            showAlert("Error signing out: " + error.message);
        });
}

// Add an authentication state change listener
auth.onAuthStateChanged(function (user) {
    var signupSection = document.getElementById("signupSection");
    var signoutButton = document.getElementById("signoutButton");
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