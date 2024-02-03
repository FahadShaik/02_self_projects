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

  /* if (inputEmail.value.trim() === "") {
    errMsgTwo.innerHTML = "Enter the Email";
    errMsgTwo.style.color = "red";
    errMsgTwo.style.display = "block";
    inputEmail.style.borderColor = "red";
  } else {
    errMsgTwo.style.display = "none";
    inputEmail.value = "";
    inputEmail.style.borderColor = "green";
  }
  if (inputPassword.value.trim() === "") {
    errMsgThree.innerHTML = "Enter the Password";
    errMsgThree.style.color = "red";
    errMsgThree.style.display = "block";
    inputPassword.style.borderColor = "red";
  } else {
    errMsgThree.style.display = "none";
    inputPassword.value = "";
    inputPassword.style.borderColor = "green";
  } */
}
