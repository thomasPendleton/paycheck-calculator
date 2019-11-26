const calculate = document.querySelector("#calculate");
const bonusRate = document.querySelector("#bonusRate");
const flaggedHours = document.querySelector("#flaggedHours");
const hoursWorked = document.querySelector("#hoursAtWork");
const display = document.querySelector("#display");
const overtime = document.querySelector("#overtime");
const reset = document.querySelector("#reset");
const saving = document.querySelector("#savings");
const display401= document.querySelector("#amount401k");

calculate.addEventListener("click", () =>{
    let numFlaggedHours = Number(flaggedHours.value);
    let numBonusRate = Number(bonusRate.value);
    let numHoursWorked = Number(hoursWorked.value);
    let numOvertime = Number(overtime.value);
    let numSaving = Number(saving.value);
    
    let overTimePay = numOvertime * (numBonusRate + 24)
    let bonusPay = numBonusRate*numFlaggedHours;
    let basePay = numHoursWorked * 24;
    let totalPay = Math.round( bonusPay + basePay + overTimePay);
    let savingsTotal = Math.round(totalPay * (numSaving / 100));
    console.log(totalPay);
    
    display.innerHTML =`$${totalPay}.`;
    display401.innerHTML = `$${savingsTotal}.`;
});

reset.addEventListener("click", () => {
    display.innerHTML = "$0.";
    bonusRate.value = "";
    flaggedHours.value = "";
    hoursWorked.value = "";
    overtime.value = "";
    display401.innerHTML = "$0."
})

