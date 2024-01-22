const submitBtn = document.querySelector(".submit");
const budgetForm = document.querySelector(".budget-form");
const expenses = document.querySelector(".budget-category");
const spentAmount = document.querySelector(".budget-amount");
const budgetInput = document.querySelector(".budget-input");
let budgetDisplayText = document.querySelector(".budget-display");
let budgetDisplayContainer = document.querySelector(
  ".budget-display-container"
);
let budgetVal;

let tableBody = document.querySelector("tbody");
const error = document.querySelector(".err");

budgetForm.addEventListener("submit", (e) => {
  e.preventDefault();

  budgetVal = budgetInput.value;
  if (budgetVal.trim() !== "") {
    budgetDisplayText.innerHTML = budgetVal + " Rs";
    budgetDisplayContainer.appendChild(budgetDisplayText);
    budgetInput.value = "";
    budgetDisplayContainer.style.display = "block";
    error.style.display = "none";
  } else {
    budgetDisplayContainer.style.display = "none";
    error.innerHTML = "enter the amount";
    error.style.display = "block";
  }
});

function addCategory(budgetAmount) {
  const expensesVal = expenses.value;
  const spentAmountVal = spentAmount.value;

  const template = `<tr>
                        <td>${expensesVal}</td>
                        <td>${spentAmountVal}</td>
                        <td>${budgetAmount - spentAmountVal}</td>
                    </tr>`;
  tableBody.innerHTML = tableBody.innerHTML + template;
}
