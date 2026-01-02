import "./style.css";
import "./style.css";

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

const validateField = (e) => {
  const input = e.target;
  if (input.tagName !== "INPUT") return;

  if (input.getAttribute("data-form-field") === "passwordConfirm") {
    const passwordInputValue = form.querySelector(
      "[data-form-field='password']",
    ).value;
    const confirmInputValue = input.value;

    input.setCustomValidity("");
    if (passwordInputValue !== confirmInputValue) {
      input.setCustomValidity("both passwords must match.");
    }
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
  highFiveDiv.textContent = "high five, you did it.";
};

const form = document.querySelector("form[data-form]");
const highFiveDiv = document.querySelector("[data-high-five-div]");

form.addEventListener("input", validateField);
form.addEventListener("mouseout", validateField);
form.addEventListener("submit", validateForm);
