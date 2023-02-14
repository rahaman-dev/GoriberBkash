// Add Money
document.getElementById("addMoney-btn").addEventListener("click", function () {
  let getInputField = document.getElementById("input-field");
  let getInputFieldValue = getInputField.value;
  let convertGetInputFieldValue = parseFloat(getInputFieldValue);
  getInputField.value = "";
  let getTotalBalance = document.getElementById("totalBalance");
  let getTotalBalanceAmount = getTotalBalance.innerText;
  let convertGetTotalBalanceAmount = parseFloat(getTotalBalanceAmount);

  let jogGetInputFieldValue =
    convertGetInputFieldValue + convertGetTotalBalanceAmount;
  getTotalBalance.innerText = jogGetInputFieldValue;
});
