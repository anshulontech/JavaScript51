const usernameInput = document.getElementById(`username`);
const usernameText = document.getElementById(`usernameText`);
const emailInput = document.getElementById(`email`);
const emailText = document.getElementById(`emailText`);
const password1Input = document.getElementById(`password1`);
const password1Text = document.getElementById(`password1Text`);
const password2Input = document.getElementById(`password2`);
const password2Text = document.getElementById(`password2Text`);

const submitBtn = document.getElementById('submit');

var letters = /^[A-Za-z0-9]+$/;
let originalPassword,username,email,copyPassword;

usernameInput.addEventListener('input', (e) => {
    username = e.target.value;
    usernameVaildator();
});

function usernameVaildator() {
    if (username.length === 0) {
        usernameInput.classList.remove('valid');
        usernameInput.classList.add(`invalid`);
        usernameText.style.display = `block`;
        usernameText.innerText = `Username can't be blank`;
    } else if (!username.match(letters)) {
        usernameInput.classList.remove('valid');
        usernameInput.classList.add(`invalid`);
        usernameText.style.display = `block`;
        usernameText.innerText = `Username can't contains special characters`
    } else {
        usernameInput.classList.remove('invalid');
        usernameInput.classList.add(`valid`);
        usernameText.style.display = `none`;
    }
}

emailInput.addEventListener('input', (e) => {
    email = e.target.value;
    emailVaildator();
})

function emailVaildator() {

}

password1Input.addEventListener('input', (e) => {
    originalPassword = e.target.value;
    originalPasswordValidator();
})

function originalPasswordValidator() {
    if (originalPassword.length < 8) {
        password1Input.classList.remove(`valid`);
        password1Input.classList.add(`invalid`);
        password1Text.style.display = `block`;
    } else {
        password1Input.classList.remove(`invalid`);
        password1Input.classList.add(`valid`);
        password1Text.style.display = `none`;
    }
}

password2Input.addEventListener('input', (e) => {
    copyPassword = e.target.value;
    copyPasswordValidator();    
})

function copyPasswordValidator() {
    if (originalPassword != copyPassword) {
        password2Input.classList.remove(`valid`);
        password2Input.classList.add(`invalid`);
        password2Text.style.display = `block`;
    } else {
        password2Input.classList.remove(`invalid`);
        password2Input.classList.add(`valid`);
        password2Text.style.display = `none`;
    }
}