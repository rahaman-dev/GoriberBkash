// Add Money
document
  .getElementById("foundTransfer-btn")
  .addEventListener("click", function () {
    let getInputField = document.getElementById("input-field");
    let getInputFieldValue = getInputField.value;
    let convertGetInputFieldValue = parseFloat(getInputFieldValue);
    getInputField.value = "";
    let getTotalBalance = document.getElementById("totalBalance");
    let getTotalBalanceAmount = getTotalBalance.innerText;
    let convertGetTotalBalanceAmount = parseFloat(getTotalBalanceAmount);

    let jogGetInputFieldValue =
      convertGetTotalBalanceAmount - convertGetInputFieldValue;
    getTotalBalance.innerText = jogGetInputFieldValue;
  });
