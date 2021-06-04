const formInputErrorResponses = {
  username: "A username is required!",
  email: "A valid email address is required!",
  password: "A password is required!",
  passwordConfirmation: "A matching password is required!",
};

// Required IDs
const idDefinitions = {
  form: "form",
  usernameInput: "username",
  emailInput: "email",
  passwordInput: "password",
  passwordConfirmationInput: "password-confirm",
};

// HTML object declarations
const htmlForm = document.getElementById(idDefinitions.form);
const htmlUsernameInput = document.getElementById(idDefinitions.usernameInput);
const htmlEmailInput = document.getElementById(idDefinitions.emailInput);
const htmlPasswordInput = document.getElementById(idDefinitions.passwordInput);
const htmlPasswordConfirmationInput = document.getElementById(
    idDefinitions.passwordConfirmationInput
);

const showError = (htmlObject, errorMessage) => {
  const formControl = htmlObject.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = errorMessage;
};

const showSuccess = (htmlObject) => {
  const formControl = htmlObject.parentElement;
  formControl.className = "form-control success";
};

const isStringValueEmpty = (string) => {
  return string === "";
};

const isValidEmail = (email) => {
  const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

// Event listeners
htmlForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevents the default trigger of the submit button
  const usernameValue = htmlUsernameInput.value;
  const emailValue = htmlEmailInput.value;
  const passwordValue = htmlPasswordInput.value;
  const passwordConfirmationValue = htmlPasswordConfirmationInput.value;

  if (isStringValueEmpty(usernameValue)) {
    showError(htmlUsernameInput, formInputErrorResponses.username);
  } else {
    showSuccess(htmlUsernameInput);
  }
  if (isStringValueEmpty(emailValue)) {
    showError(htmlEmailInput, formInputErrorResponses.email);
  } else if (!isValidEmail(emailValue)) {
    showError(htmlEmailInput, formInputErrorResponses.email);
  } else {
    showSuccess(htmlEmailInput);
  }
  if (isStringValueEmpty(passwordValue)) {
    showError(htmlPasswordInput, formInputErrorResponses.password);
  } else {
    showSuccess(htmlPasswordInput);
  }
  if (isStringValueEmpty(passwordConfirmationValue)) {
    showError(
        htmlPasswordConfirmationInput,
        formInputErrorResponses.passwordConfirmation
    );
  } else {
    showSuccess(htmlPasswordConfirmationInput);
  }
});
