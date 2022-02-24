function validate() {
    const user = document.getElementById("user");
    const password = document.getElementById("password");
    const form = document.getElementById("loginForm");
    const warning = document.getElementById("warning");

    if (user.value === "magalu" && password.value === "m@galu123") {
        console.log("deu certo");
        form.action = "/welcome.html";
    } else {
        warning.style.display = "block";
        form.addEventListener('submit', function (e) {
            e.preventDefault()
        })
    }
}