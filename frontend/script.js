function togglePassword() {
    const passwordInput = document.getElementById("password");
    const showPasswordText = document.querySelector(".show-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showPasswordText.textContent = "Hide"; // Change text to "Hide"
    } else {
        passwordInput.type = "password";
        showPasswordText.textContent = "Show"; // Change text back to "Show"
    }
}
