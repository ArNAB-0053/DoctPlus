function showAlert(message) {
    var customAlert = document.getElementById("custom-alert");
    var customAlertMessage = document.getElementById("custom-alert-message");
    var customAlertClose = document.getElementById("custom-alert-close");

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