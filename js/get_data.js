const loginForm = document.getElementById("login-form");
const errorMsg = document.getElementById("error");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    errorMsg.style.opacity = 1;
    setTimeout(() => { errorMsg.style.opacity = 0; }, 3000);

    console.log(username);
    console.log(password)

})
