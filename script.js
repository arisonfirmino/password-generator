const sliderInput = document.querySelector("#slider");

const sizePassword = document.querySelector("#value");

const generatedPassword = document.querySelector("#password");

const passwordContainer = document.querySelector(".password-container");

const copyButton = document.querySelector(".copy-button");

const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";
let newPassword = "";

slider.oninput = function () {
    sizePassword.innerHTML = this.value;
};

sizePassword.innerHTML = sliderInput.value;

function generatePassword() {
    let password = "";

    for (let i = 0, n = charset.length; i < sliderInput.value; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }

    passwordContainer.classList.remove("hide");
    generatedPassword.innerHTML = password;
    newPassword = password;

    copyButton.style.visibility = "visible";
}

document
    .querySelector("#generator-button")
    .addEventListener("click", generatePassword);

copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(newPassword);

    alert("Senha copiada com sucesso!");
});
