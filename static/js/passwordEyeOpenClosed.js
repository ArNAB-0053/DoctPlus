document.addEventListener("DOMContentLoaded", function () {
    let eyeopen = document.getElementById("eye");
    let eyeclose = document.getElementById("eye-closed");
    let passwordInput = document.getElementById("password");

    eyeclose.style.maxWidth = "0";
    eyeclose.style.paddingRight = "0";
    eyeopen.style.paddingLeft = "0";
    eyeclose.style.marginRight = "0";

    eyeopen.onclick = function () {
        eyeclose.style.maxWidth = "50vh";
        eyeopen.style.maxWidth = "0";
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            eyeopen.classList.remove("bi-eye-fill");
            eyeopen.classList.add("bi-eye-slash-fill");
        }
    };

    eyeclose.onclick = function () {
        eyeclose.style.maxWidth = "0";
        eyeopen.style.maxWidth = "50vh";
        passwordInput.type = "password";
        eyeopen.classList.remove("bi-eye-slash-fill");
        eyeopen.classList.add("bi-eye-fill");
    };
});