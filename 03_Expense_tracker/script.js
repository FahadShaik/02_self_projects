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

budgetForm.addEventListener("submit", (e) => {
  e.preventDefault();

  budgetVal = budgetInput.value;
  budgetDisplayText.innerHTML = budgetVal + " Rs";
  budgetDisplayContainer.appendChild(budgetDisplayText);
  budgetInput.value = "";
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
