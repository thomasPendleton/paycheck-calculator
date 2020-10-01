const calculate = document.querySelector("#calculate");
const bonusRate = document.querySelector("#bonusRate");
const flaggedHours = document.querySelector("#flaggedHours");
const hoursWorked = document.querySelector("#hoursAtWork");
const display = document.querySelector("#display");
const overtime = document.querySelector("#overtime");
const reset = document.querySelector("#reset");
const saving = document.querySelector("#savings");
const display401 = document.querySelector("#amount401k");
const takeHome = document.querySelector("#takehome");

let clicked = () => {
  let numBonusRate = +bonusRate.value;
  let flagged = flaggedHours.value;
  let punched = hoursWorked.value;
  let numOvertime = overtime.value;
  let overTimePay = numOvertime * (numBonusRate + 26);
  let totalPay = Math.round(
    comp(+flagged, +punched, numBonusRate, overTimePay)
  );
  let numSaving = +saving.value;
  let savingsTotal = Math.round(totalPay * (numSaving / 100));
  let taxed = totalPay * 0.26;
  let calcTakeHome = totalPay - taxed;

  display.innerHTML = `$${totalPay}.`;
  takeHome.innerHTML = `$${Math.round(
    calcTakeHome
  )}. Est. after taxes and insurance`;
  display401.innerHTML = `$${savingsTotal}.`;
};

let comp = (val1, val2, bonus, ot) => {
  console.log(val1, val2, bonus, ot);
  if (val1 >= val2) {
    console.log("if");
    return val1 * (26 + bonus) + ot;
  } else {
    console.log("else");
    return val1 * bonus + val2 * 26 + ot;
  }
};

const clearBoard = () => {
  display.innerHTML = "$0.";
  flaggedHours.value = "";
  hoursWorked.value = "";
  overtime.value = "";
  display401.innerHTML = "$0.";
  takeHome.innerHTML = "$0.";
};

calculate.addEventListener("click", () => {
  clicked();
});

window.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    clicked();
  } else if (event.keyCode === 82) {
    clearBoard();
  }
});

reset.addEventListener("click", () => {
  clearBoard();
});
