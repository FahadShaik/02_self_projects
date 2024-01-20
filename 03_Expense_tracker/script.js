const submitBtn = document.querySelector(".submit");
const budgetInput = document.querySelector(".budget-input");
const budgetDisplayText = document.querySelector(".budget-display");
const budgetDisplayContainer = document.querySelector(
  ".budget-display-container"
);
const budgetForm = document.querySelector(".budget-form");

budgetForm.addEventListener("submit", (e) => {
  e.preventDefault();

  budgetDisplayText.innerHTML = budgetInput.value + " RS";
  budgetDisplayContainer.appendChild(budgetDisplayText);

  budgetInput.value = "";
});
