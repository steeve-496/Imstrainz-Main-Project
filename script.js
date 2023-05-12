function validateForm() {
    // Get form inputs
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirm-password");

    // Get form input values
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var phone = phoneInput.value.trim();
    var password = passwordInput.value.trim();
    var confirmPassword = confirmPasswordInput.value.trim();

    // Initialize error messages
    var nameError = "";
    var emailError = "";
    var phoneError = "";
    var passwordError = "";
    var confirmPasswordError = "";

    // Check if name is at least 5 characters long
    if (name.length < 5) {
        nameError = "Name must be at least 5 characters long.";
    }

    // Check if email has @ character
    if (!email.includes("@")) {
        emailError = "Email must include @ character.";
    }

    // Check if phone is 10-digit number and not equal to 123456789
    if (phone.length !== 10 || phone === "1234567890") {
        phoneError = "Phone must be a 10-digit number.";
    }

    // Check if password is at least 8 characters long and not 'password' or user's name
    if (password.length < 8 || password === "password" || password === name) {
        passwordError = "Password must be at least 8 characters long and cannot be 'password' or your name.";
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
        confirmPasswordError = "Passwords do not match.";
    }

    // Display error messages if there are any
    document.getElementById("name").classList.remove("error");
    document.getElementById("email").classList.remove("error");
    document.getElementById("phone").classList.remove("error");
    document.getElementById("password").classList.remove("error");
    document.getElementById("confirm-password").classList.remove("error");

    if (nameError) {
        document.getElementById("name").classList.add("error");
        document.getElementById("name").focus();
        document.getElementById("name").setCustomValidity(nameError);
    }

    if (emailError) {
        document.getElementById("email").classList.add("error");
        document.getElementById("email").focus();
        document.getElementById("email").setCustomValidity(emailError);
    }

    if (phoneError) {
        document.getElementById("phone").classList.add("error");
        document.getElementById("phone").focus();
        document.getElementById("phone").setCustomValidity(phoneError);
    }

    if (passwordError) {
        document.getElementById("password").classList.add("error");
        document.getElementById("password").focus();
        document.getElementById("password").setCustomValidity(passwordError);
    }

    if (confirmPasswordError) {
        document.getElementById("confirm-password").classList.add("error");
        document.getElementById("confirm-password").focus();
        document.getElementById("confirm-password").setCustomValidity(confirmPasswordError);
    }

    // Return false if any errors were found
    if (nameError || emailError || phoneError || passwordError || confirmPasswordError) {
        return false;
    }

    // Return true if all fields are valid
    return true;
}

// Remove error messages on input change
var inputs = document.querySelectorAll("input");
inputs.forEach(function(input) {
    input.addEventListener("input", function() {
        this.setCustomValidity("");
        this.classList.remove("error");
    });
});