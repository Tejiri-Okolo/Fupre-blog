const login = JSON.parse(localStorage.getItem("users"));
const loginBtn = document.getElementById("login");
const signUpBtn = document.getElementById("sign-up");
const logOutBtn = document.getElementById("log-out");

function loadPage() {
  login.forEach((element) => {
    if (element.correctDetails === true) {
      console.log(loginBtn.classList);

      loginBtn.classList.add("hidden");
      console.log(loginBtn.classList);
      signUpBtn.classList.add("hidden");
      logOutBtn.classList.remove("hidden");
    } else {
      loginBtn.classList.remove("hidden");
      signUpBtn.classList.remove("hidden");
      logOutBtn.classList.add("hidden");
    }
  });
}

loadPage();

logOutBtn.addEventListener("click", logOut);

function logOut() {
  login.forEach((user) => {
    user.correctDetails = false;
  });
  localStorage.setItem("users", JSON.stringify(login));
  loadPage();
}
