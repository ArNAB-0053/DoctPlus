const firebaseConfig = {
    apiKey: "AIzaSyAY0DWLKM7e0M4bjdF58i4gfiG3c8IhTCA",
    authDomain: "projectdiseasepredictor.firebaseapp.com",
    databaseURL: "https://projectdiseasepredictor-default-rtdb.firebaseio.com",
    projectId: "projectdiseasepredictor",
    storageBucket: "projectdiseasepredictor.appspot.com",
    messagingSenderId: "947196362135",
    appId: "1:947196362135:web:0b373104638bf8ec0118d2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

var user = auth.currentUser;
var PatientDetailsDB = firebase.database().ref("PatientDetails");

document.getElementById("PatientDetails").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    // Get the current user
    var user = auth.currentUser;

    // Check if the user is logged in
    if (user) {
        // Get the input field values
        var fname = getElementVal("Fname");
        var mname = getElementVal("Mname");
        var lname = getElementVal("Lname");
        var age = getElementVal("age");
        var gender = getElementVal("gender");
        var city = getElementVal("city");
        var dist = getElementVal("dist");
        var pin = getElementVal("pin");
        var country = getElementVal("country");
        var disease = getElementVal("disease");
        var height = getElementVal("height")
        var DOB = getElementVal("DOB")

        saveMessages(user.uid, fname, mname, lname, age, gender, city, dist, pin, country, disease, height, DOB);

        // Enable alert
        document.querySelector(".alert").style.display = "block";

        // Remove the alert
        setTimeout(() => {
            document.querySelector(".alert").style.display = "none";
        }, 3000);

        // Reset the form
        document.getElementById("PatientDetails").reset();
    } else {
        // Handle the case when the user is not signed in
        alert("User not signed in or an error occurred.");
    }
}

const saveMessages = (userId, fname, mname, lname, age, gender, city, dist, pin, country, disease, height, DOB) => {
    var genderRef = PatientDetailsDB.child(userId);

    var data = {
        fname: fname,
        mname: mname,
        lname: lname,
        age: age,
        gender: gender,
        city: city,
        dist: dist,
        pin: pin,
        country: country,
        disease: disease,
        height: height,
        DOB: DOB,
    };

    genderRef.set(data);
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};