let signinbtn = document.getElementById("signinbtn");
let signupbtn = document.getElementById("signupbtn");
let nameField = document.getElementById("nameField");
let mobileField = document.getElementById("mobileField");
let form_header = document.getElementById("form_header");
let name = document.getElementById("name");
let mobile = document.getElementById("mobile");

function toggleFields(signInMode) {
    const fields = [nameField, mobileField];

    fields.forEach((field) => {
        if (signInMode) {
            field.style.maxHeight = "0";
            field.style.paddingTop = "0";
            field.style.paddingBottom = "0";
            field.style.boxShadow = "none";
            field.style.display = "none";
            field.style.transition =
                "max-height 0.5s ease, padding 0.5s ease, box-shadow 0.5s ease, transform 0.5s ease";
            field.style.transform = "translateX(-100%)";
        } else {
            field.style.maxHeight = "6vh";
            field.style.paddingTop = "14px";
            field.style.paddingBottom = "10px";
            field.style.boxShadow =
                "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset";
            field.style.display = "flex";
            field.style.transition =
                "max-height 0.5s ease, padding 0.5s ease, box-shadow 0.5s ease, transform 0.5s ease";
            field.style.transform = "translateX(0)";
        }
    });

    form_header.innerText = signInMode ? "SIGN IN" : "SIGN UP";
    signupbtn.classList.toggle("signin-btn", signInMode);
    signinbtn.classList.toggle("signin-btn", !signInMode);
}

signinbtn.onclick = function () {
    toggleFields(true);
    login();
};

signupbtn.onclick = function () {
    toggleFields(false);
    register();
};