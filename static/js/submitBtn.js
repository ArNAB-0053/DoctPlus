const btn = document.querySelector("#btn");
const btnTxt = document.querySelector("#btnText");
const linkText = document.querySelector(".completeProfile");

btn.onclick = () => {
    // Check if the disease input field is non-empty
    const diseaseInput = document.getElementById("disease");
    if (diseaseInput.value.trim() === "") {
        alert("Please fill in the Disease field.");
        return;
    }

    btnTxt.innerHTML = "Thanks";
    btn.classList.add("active");

    // Delay the redirection by 15 seconds
    setTimeout(() => {
        window.location.href = "/profile";
        linkText.innerHTML = "Edit";
    }, 5000);
};