let numDisplay = document.querySelector(".num-display");
const inputButton = document.querySelectorAll("button");

inputButton.forEach((button) => {
  button.addEventListener("click", () => {
    numDisplay.value += button.textContent;
  });
});
