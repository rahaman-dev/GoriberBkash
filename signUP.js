document.getElementById("nextButton").addEventListener("click", function () {
  let getFirstName = document.getElementById("first-name");
  let getFirstNameValue = getFirstName.value;
  let getLastName = document.getElementById("last-name");
  let getLastNameValue = getLastName.value;
  let getEmail = document.getElementById("email");
  let getEmailValue = getEmail.value;
  let getPassword = document.getElementById("password");
  let getPasswordValue = getPassword.value;
  if (
    getFirstNameValue === "First Name" &&
    getLastNameValue === "Last Name" &&
    getEmailValue === "Email" &&
    getPasswordValue === "password"
  ) {
    window.location.href = "atherPages/sinUpTwo.html";
  } else {
    alert("Please Give me current information");
  }
});
