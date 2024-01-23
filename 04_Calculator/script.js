let numDisplay = document.querySelector(".num-display");
const inputButton = document.querySelectorAll(".number-button");
const clearInput = document.querySelector(".clear-button");

inputButton.forEach((button) => {
  button.addEventListener("click", () => {
    numDisplay.value += button.textContent;
  });
});

function calculate() {
  const finalResult = eval(numDisplay.value);
  numDisplay.value = finalResult;
}

clearInput.addEventListener("click", () => {
  numDisplay.value = "";
});
