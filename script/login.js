document.getElementById("login-btn").addEventListener("click", function () {
  let getEmail = document.getElementById("email-field");
  let getEmailValue = getEmail.value;
  getEmail.value = "";
  let getPassword = document.getElementById("password-field");
  let getPasswordValue = getPassword.value;
  getPassword.value = "";
  if (getEmailValue === "email@gmail.com" && getPasswordValue === "Password") {
    window.location.href = "../atherPages/main.html";
  } else {
    alert("please give me correct information");
  }
});

/* document.getElementById("submit-btn").addEventListener("click", function () {
  let emailAddress = document.getElementById("user-email");
  let email = emailAddress.value;
  let passwordField = document.getElementById("user-password");
  let password = passwordField.value;
  if (email === "email" && password === "password") {
    window.location.href = "bankPage.html";
  } else {
    alert("you are invalid user");
  }
}); */
