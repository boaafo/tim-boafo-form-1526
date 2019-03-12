// Declaration of constant DOM variables
const name = document.getElementById("fullName");
const email = document.getElementById("email");
const message = document.getElementById("message");
const buttonSubmit = document.getElementById("submit-button");

const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//Function that validates email addresses using regular expressions
function inspectEmail(email) {
    return regEx.test(String(email).toLowerCase());
}

//Function that checks if array exists or is empty
function isArrayEmpty(array) {
    return !Array.isArray(array) || !array.length;
}

let formData = {};
let formErrors = [];


buttonSubmit.addEventListener("click", validateForm);


// Main Validation Script
function validateForm(event) {

    event.preventDefault();  // Prevents browser from taking the default action without explicit handling

    //Name Checking
    if (name.value) {
        formData.name = name.value;
    } else {
        formErrors.push("Please enter your name");
    }

    //Email Checking
    if (email.value && inspectEmail(email.value)) {
        formData.email = email.value;
    } else if (email.value && !inspectEmail(email.value)) {
        formErrors.push("Email entered is not valid, please try again");
    } else {
        formErrors.push("Please fill out the email field");
    }

    //Message Checking
    if (message.value) {
        formData.message = message.value;
    } else {
        formErrors.push("Please enter a message");
    }

    if (!isArrayEmpty(formErrors)) {
        console.log(formErrors);
        formErrors.length = 0;  // Clears all errors from array
    } else {
        // Display form data if there are no errors found
        console.log(formData);
    }

}
