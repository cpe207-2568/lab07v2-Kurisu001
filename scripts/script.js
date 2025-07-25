// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input")
const passwordInput = document.querySelector("#password-input")
const passwordConfirmInput = document.querySelector("#password-confirm-input")

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");


// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}
function validatePassword(password) {
  return password.value.length >= 6;
}

function validatePasswordComfirm(password,passwordConfirm) {
  return password.value == passwordConfirm.value && validatePassword(password);
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};
passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
};
passwordConfirmInput.onkeyup = () => {
  passwordConfirmInput.classList.remove("is-valid");
  passwordConfirmInput.classList.remove("is-invalid");
};
// add callback functions for other input events.
// (lastname, email, password, confirm password)

// add callback function for submit button.
submitBtn.onclick = () => {
  checkValid = false

  // validate first name
  if (firstNameInput.value.trim() === "") {
    firstNameInput.classList.add("is-invalid");
    checkValid =  true
    
  } else {
    firstNameInput.classList.add("is-valid");
    
  }

  // validate last name
  if (lastNameInput.value.trim() === "") {
    lastNameInput.classList.add("is-invalid");
    checkValid = true
  } else {
    lastNameInput.classList.add("is-valid");
    
  }

  // validate email
  if (validateEmail(emailInput.value)) {
    emailInput.classList.add("is-valid");
  } else {
    emailInput.classList.add("is-invalid");
    checkValid = true
    
  }

  // validate password
  if (validatePassword(passwordInput)) {
    passwordInput.classList.add("is-valid");
  } else {
    checkValid = true
    passwordInput.classList.add("is-invalid");
    
  }


  // validate confirm password
  if (validatePasswordComfirm(passwordInput,passwordConfirmInput)) {
    passwordConfirmInput.classList.add("is-valid");
  } else {
    passwordConfirmInput.classList.add("is-invalid");
    checkValid = true
    
  }

  if (!checkValid) alert("Registered successfully");
};

resetBtn.onclick = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
  passwordConfirmInput.classList.remove("is-valid");
  passwordConfirmInput.classList.remove("is-invalid");
  firstNameInput.value = null;
  lastNameInput.value = null;
  emailInput.value = null;
  passwordInput.value = null;
  passwordConfirmInput.value = null;
}

// add callback function for Reset button.
