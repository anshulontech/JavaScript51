const usernameInput = document.getElementById(`username`);
const usernameText = document.getElementById(`usernameText`);
const emailInput = document.getElementById(`email`);
const emailText = document.getElementById(`emailText`);
const password1Input = document.getElementById(`password1`);
const password1Text = document.getElementById(`password1Text`);
const password2Input = document.getElementById(`password2`);
const password2Text = document.getElementById(`password2Text`);

const submitBtn = document.getElementById("submit");
const form = document.getElementById(`form`);

var letters = /^[A-Za-z0-9]+$/;
let originalPassword, username, email, copyPassword;
let idx;

usernameInput.addEventListener("input", (e) => {
    username = e.target.value;
    usernameVaildator();
});

function usernameVaildator() {
    if (username == null || username.length === 0) {
        usernameInput.classList.remove("valid");
        usernameInput.classList.add(`invalid`);
        usernameText.style.display = `block`;
        usernameText.innerText = `Username can't be blank`;
        return false;
    } else if (!username.match(letters)) {
        usernameInput.classList.remove("valid");
        usernameInput.classList.add(`invalid`);
        usernameText.style.display = `block`;
        usernameText.innerText = `Username can't contains special characters`;
        return false;
    } else {
        usernameInput.classList.remove("invalid");
        usernameInput.classList.add(`valid`);
        usernameText.style.display = `none`;
        return true;
    }
}

emailInput.addEventListener("input", (e) => {
    email = e.target.value;
    emailVaildator();
});

function emailVaildator() {
    if (email == null) {
        emailInput.classList.remove(`valid`);
        emailInput.classList.add(`invalid`);
        emailText.style.display = "block";
        return false;
    }

    if (!countOccurrence1()) {
        emailInput.classList.remove(`valid`);
        emailInput.classList.add(`invalid`);
        emailText.style.display = "block";
        return false;
    }

    if (!countOccurrence2()) {
        emailInput.classList.remove(`valid`);
        emailInput.classList.add(`invalid`);
        emailText.style.display = "block";
        return false;
    }

    emailInput.classList.remove(`invalid`);
    emailInput.classList.add(`valid`);
    emailText.style.display = "none";
    return true;
}

function countOccurrence2() {
    let p = email.indexOf(".");

    let canBe = false;

    while (p !== -1) {
        if (p > idx) canBe = true;

        if (p === idx + 1) return false;

        if (p === email.length - 1) return false;

        let newIdx = email.indexOf(".", p + 1);

        if (newIdx === p + 1) return false;

        p = newIdx;
    }

    return canBe;
}

function countOccurrence1() {
    let p = email.indexOf("@");

    if (
        p === -1 ||
        p === 0 ||
        p === email.length - 1 ||
        email.indexOf("@", p + 1) !== -1
    )
        return false;

    idx = p;

    return true;
}

password1Input.addEventListener("input", (e) => {
    originalPassword = e.target.value;
    originalPasswordValidator();
});

function originalPasswordValidator() {
    if (originalPassword == null || originalPassword.length < 8) {
        password1Input.classList.remove(`valid`);
        password1Input.classList.add(`invalid`);
        password1Text.style.display = `block`;
        return false;
    } else {
        password1Input.classList.remove(`invalid`);
        password1Input.classList.add(`valid`);
        password1Text.style.display = `none`;
        return true;
    }
}

password2Input.addEventListener("input", (e) => {
    copyPassword = e.target.value;
    copyPasswordValidator();
});

function copyPasswordValidator() {
    if (copyPassword == null || originalPassword != copyPassword) {
        password2Input.classList.remove(`valid`);
        password2Input.classList.add(`invalid`);
        password2Text.style.display = `block`;
        return false;
    } else {
        password2Input.classList.remove(`invalid`);
        password2Input.classList.add(`valid`);
        password2Text.style.display = `none`;
        return true;
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let trueCount = 0;

    if (usernameVaildator()) trueCount++;

    if (emailVaildator()) trueCount++;

    if (originalPasswordValidator()) trueCount++;

    if (copyPasswordValidator()) trueCount++;

    if (trueCount == 4) {
        window.alert(`Form Sumitted Succesfully!`);
        window.location.reload();
    }
});
