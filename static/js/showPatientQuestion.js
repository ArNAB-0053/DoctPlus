function showNameQuestion() {
    document.getElementById("nameQuestion").style.display = "flex";
    document.getElementById("ageQuestion").style.display = "none";
}

function showAgeQuestion() {
    var fnameValue = getElementVal("Fname");
    var mnameValue = getElementVal("Mname");
    var lnameValue = getElementVal("Lname");
    if (!fnameValue || !mnameValue || !lnameValue) {
        alert("Please enter your full name to proceed.");
        return;
    }
    document.getElementById("nameQuestion").style.display = "none";
    document.getElementById("ageQuestion").style.display = "flex";
    document.getElementById("genderQuestion").style.display = "none";
}

function showGenderQuestion() {
    var ageValue = getElementVal("age");
    if (!ageValue) {
        alert("Please enter your age to proceed.");
        return;
    }
    document.getElementById("ageQuestion").style.display = "none";
    document.getElementById("genderQuestion").style.display = "flex";
    document.getElementById("addressQuestion").style.display = "none";
}

function showHeightQuestion() {
    var genderValue = getElementVal("gender");
    if (!genderValue) {
        alert("Please enter your age to proceed.");
        return;
    }
    document.getElementById("genderQuestion").style.display = "none";
    document.getElementById("heightQuestion").style.display = "flex";
    document.getElementById("DOBQuestion").style.display = "none";
}

function showDOBQuestion() {
    var heightValue = getElementVal("height");
    if (!heightValue) {
        alert("Please enter your age to proceed.");
        return;
    }
    document.getElementById("heightQuestion").style.display = "none";
    document.getElementById("DOBQuestion").style.display = "flex";
    document.getElementById("addressQuestion").style.display = "none";
}

function showAddressQuestion() {
    var DOBValue = getElementVal("DOB");
    if (!DOBValue) {
        alert("Please enter your age to proceed.");
        return;
    }
    document.getElementById("DOBQuestion").style.display = "none";
    document.getElementById("addressQuestion").style.display = "flex";
    document.getElementById("diseaseQuestion").style.display = "none";
}

function showDiseaseQuestion() {
    var cityValue = getElementVal("city");
    var distValue = getElementVal("dist");
    var pinValue = getElementVal("pin");
    var countryValue = getElementVal("country");
    if (!cityValue || !distValue || !pinValue || !countryValue) {
        alert("Please enter your age to proceed.");
        return;
    }
    document.getElementById("addressQuestion").style.display = "none";
    document.getElementById("diseaseQuestion").style.display = "flex";
}