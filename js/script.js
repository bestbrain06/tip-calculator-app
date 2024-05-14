"use strict";

// 1. get the bill value from the user
// 2. get the tip-percent from the user
// 3. get the number of people
// 4. solve for the tip amount for a person
// 5. solve for the total amount for a person

const billInput = document.querySelector(".bill-input");
const tipButtons = document.querySelectorAll(".tip-buttons");
const peopleInput = document.querySelector(".people-input");
const errorMessage = document.querySelector(".error-message");

billInput.addEventListener("input", calcTip);
tipButtons.forEach((button) => {
  button.addEventListener("click", calcTip);
});
peopleInput.addEventListener("input", calcTip);

function calcTip() {
  const billValue = Number(billInput.value);
  const tipPercent = Number(this.value);
  const peopleValue = Number(peopleInput.value);

  if (peopleValue <= 0) {
    errorMessage.textContent = "Can't be zero";
    peopleInput.classList.add(".error");
  } else {
    errorMessage.textContent = " ";
    peopleInput.classList.remove(".error");
  }

  //   console.log(billValue);
  //   console.log(tipPercent);
  //   console.log(peopleValue);

  let tipAmount = billValue * (tipPercent / 100);
  tipAmount = tipAmount / peopleValue;
  console.log(tipAmount);
}
