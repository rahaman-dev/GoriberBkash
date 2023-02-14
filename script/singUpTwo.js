document.getElementById("nextButton").addEventListener("click", function () {
  let getAddress = document.getElementById("address");
  let getAddressValue = getAddress.value;
  let getOldAddress = document.getElementById("oldAddress");
  let getOldAddressValue = getOldAddress.value;
  let getZipCode = document.getElementById("zipCode");
  let getZipCodeValue = getZipCode.value;
  if (
    getAddressValue === "Current Address" &&
    getOldAddressValue === "Old Address" &&
    getZipCodeValue === "Zip Code"
  ) {
    window.location.href = "singUpComplated.html";
  } else {
    alert("Please Give me current information");
  }
});
