/******/ (() => { // webpackBootstrap
/******/ 	"use strict";



const showError = (input) => {
  const errorContainer = input.nextElementSibling;
  let errorMsg = "";

  if (input.validity.typeMismatch) {
    errorMsg = "should be structured like 'john@gmail.com";
  }

  console.log(input.validity);
  if (input.validity.valueMissing) {
    errorMsg = "field can not be empty.";
  }

  if (input.validity.tooShort) {
    errorMsg = `should be more than ${input.minLength} characters.`;
  }

  if (input.validity.customError) {
    errorMsg = input.validationMessage;
  }

  errorContainer.textContent = errorMsg;
};

// From feedback
const validatePasswords = () => {
  const password = form.querySelector("[data-form-field='password']");
  const confirm = form.querySelector("[data-form-field='passwordConfirm']");

  if (confirm.value && password.value !== confirm.value) {
    confirm.setCustomValidity("Passwords must match");
  } else {
    confirm.setCustomValidity("");
  }
};

const validateField = (e) => {
  const input = e.target;
  if (input.tagName !== "INPUT") return;

  // From feedback
  if (
    input.getAttribute("data-form-field") === "password" ||
    input.getAttribute("data-form-field") === "passwordConfirm"
  ) {
    validatePasswords();
  }

  if (!input.validity.valid) {
    showError(input);
  } else {
    const errorContainer = input.nextElementSibling;

    if (!errorContainer.textContent.trim().length) return;

    errorContainer.textContent = "";
  }
};

const validateForm = (e) => {
  e.preventDefault();
  console.log(highFiveDiv);
  if (!form.checkValidity()) {
    const formFields = document.querySelectorAll("input[data-form-field]");

    formFields.forEach((f) => showError(f));
    return;
  }

  form.reset();
  highFiveDiv.textContent = "High five! ✋ Form submitted successfully.";

  // Clear after 3 seconds
  setTimeout(() => {
    highFiveDiv.textContent = "";
  }, 3000);
};

const form = document.querySelector("form[data-form]");

const highFiveDiv = document.querySelector("[data-high-five-div]");

form.addEventListener("input", validateField);
form.addEventListener("focusout", validateField);
form.addEventListener("submit", validateForm);

/******/ })()
;
//# sourceMappingURL=main.js.map