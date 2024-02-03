let selectorFn = (className) => {
  return document.querySelector(className);
};

const inputName = selectorFn(".input-name");
const inputEmail = selectorFn(".input-email");
const inputPassword = selectorFn(".input-password");
const errMsgs = document.getElementsByClassName("err");
const errMsgOne = errMsgs[0];
const errMsgTwo = errMsgs[1];
const errMsgThree = errMsgs[2];

function validationHandler(inputs, message, field) {
  if (inputs.value.trim() === "") {
    message.innerHTML = `Enter the ${field}`;
    message.style.color = "red";
    message.style.display = "block";
    inputs.style.borderColor = "red";
  } else {
    message.style.display = "none";
    inputs.value = "";
    inputs.style.borderColor = "green";
  }
}

function submitHandler(e) {
  e.preventDefault();
  validationHandler(inputName, errMsgOne, "name");
  validationHandler(inputEmail, errMsgTwo, "email");
  validationHandler(inputPassword, errMsgThree, "password");
}
