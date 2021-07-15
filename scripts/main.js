const emailInputBox = document.getElementById("email");
const invalidEmail = document.getElementById("invalid-email");
const errorIconEmail = document.getElementById("error-icon-email");
const firstNameInput = document.getElementById("first-name");
const invalidFirstName = document.getElementById("invalid-first-name");
const errorIconFirstName = document.getElementById("error-icon-first-name");
const lastNameInput = document.getElementById("last-name");
const invalidLastName = document.getElementById("invalid-last-name");
const errorIconLastName = document.getElementById("error-icon-last-name");
const passwordInput = document.getElementById("password"); 
const invalidPassword = document.getElementById("invalid-password");
const errorIconPassword = document.getElementById("error-icon-password");  
const email = emailInputBox.value; 
const firstName = firstNameInput.value;
const lastName = lastNameInput.value;
const password = passwordInput.value;





function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
      return true;
    } else {
      return false;
    }
}

function validateFirstName(input) {
    if (input.value == "") {
        return false;
    } else {
        return true;
    }
}

function validateLastName(input) {
    if (input.value == "") {
        return false;
    } else {
        return true;
    }
}

function validatePassword(input) {
    if (input.value == "") {
        return false;
    } else {
        return true;
    }
}

function firstNameValid(form) {
    if (form.classList.contains('first-name')) {
        form.classList.remove('first-name');
    }
}

function firstNameInvalid(form) {
    if (!form.classList.contains('first-name')) {
        form.classList.add('first-name');
        invalidFirstName.style.visibility = "visible";
        errorIconFirstName.style.visibility = "visible";

    }
    return false;
}

function lastNameValid(form) {
    if (form.classList.contains('last-name')) {
        form.classList.remove('last-name');
    }
}

function lastNameInvalid(form) {
    if (!form.classList.contains('last-name')) {
        form.classList.add('last-name');
        invalidLastName.style.visibility = "visible";
        errorIconLastName.style.visibility = "visible";

    }
    return false;
}

function passwordValid(form) {
    if (form.classList.contains('password')) {
        form.classList.remove('password');
    }
}

function passwordInvalid(form) {
    if (!form.classList.contains('password')) {
        form.classList.add('password');
        invalidPassword.style.visibility = "visible";
        errorIconPassword.style.visibility = "visible";

    }
    return false;
}

function emailValid(form) {
    if (form.classList.contains('email')) {
        form.classList.remove('email');
    }
}

function emailInvalid(form) {
    if (!form.classList.contains('email')) {
        form.classList.add('email');
        invalidEmail.style.visibility = "visible";
        errorIconEmail.style.visibility = "visible";

    }
    return false;
}

// '.content-signin' => '.form-input'
//var form = document.querySelector('.content__signin');
var form = document.querySelector('.form-input');

form.querySelector('.email').addEventListener('blur', (event) => {
    if(!ValidateEmail(form.querySelector('.email'))) {
        event.preventDefault();
        emailInvalid(form);
      } else {
        emailValid(form);
      }
      if(!validateFirstName(form.querySelector('.first-name'))) {
        event.preventDefault();
        firstNameInvalid(form);
    }   else {
        firstNameValid(form);
    }
    if(!validateLastName(form.querySelector('.last-name'))) {
        event.preventDefault();
        lastNameInvalid(form);
    }   else {
        lastNameValid(form);
    } 
    if(!validatePassword(form.querySelector('.password'))) {
        event.preventDefault();
        passwordInvalid(form);
    }   else {
        passwordValid(form);
    }
})
form.addEventListener('submit', (event) => {
    if(!ValidateEmail(form.querySelector('.email'))) {
        event.preventDefault();
        emailInvalid(form);
    }   else {
        emailValid(form);
    }
    if(!validateFirstName(form.querySelector('.first-name'))) {
        event.preventDefault();
        firstNameInvalid(form);
    }   else {
        firstNameValid(form);
    }
    if(!validateLastName(form.querySelector('.last-name'))) {
        event.preventDefault();
        lastNameInvalid(form);
    }   else {
        lastNameValid(form);
    } 
    if(!validatePassword(form.querySelector('.password'))) {
        event.preventDefault();
        passwordInvalid(form);
    }   else {
        passwordValid(form);
    }
})