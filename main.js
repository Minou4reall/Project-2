document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".val_form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        const nameBox = document.querySelector('div[name="name"]')
        const emailBox = document.querySelector('div[name="email"]')
        const phoneBox = document.querySelector('div[name="phone"]')
        const passBox = document.querySelector('div[name="pass"]')
        const nameInput = document.querySelector('input[type="text"]');
        const emailInput = document.querySelector('input[type="mail"]');
        const phoneInput = document.querySelector('input[type="tel"]');
        const passwordInput = document.querySelector('input[type="password"]');
        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const phoneValue = phoneInput.value.trim();
        const passwordValue = passwordInput.value.trim();
        let isValid = true;
        if (nameValue === "") {
            nameBox.setAttribute("error", "Please enter your name ")
            isValid = false;
        } else {
            removeError(nameInput);
        }

        if (emailValue === "") {
            emailBox.setAttribute("error", "please enter your email address")
            isValid = false;
        } else if (!isValidEmail(emailValue)) {
            emailBox.setAttribute("error", "Please enter a valid email address");
            isValid = false;
        } else {
            removeError(emailInput);
        }

        if (phoneValue === "") {
            phoneBox.setAttribute("error", "please enter your phone number")
            isValid = false;
        } else if (!isValidPhone(phoneValue)) {
            phoneBox.setAttribute("error", "Please enter a valid phone number");
            isValid = false;
        } else {
            removeError(phoneInput);
        }

        if (passwordValue === "") {
            passBox.setAttribute("error", "please enter your password ")
            isValid = false;
        } else if (passwordValue.length < 8) {
            passBox.setAttribute("error", "Password must be at least 8 characters long");
            isValid = false;
        } else {
            removeError(passwordInput);
        }

        if (isValid) {
            form.submit();
        }
    }


    function removeError(input) {
        input.removeAttribute("error");
    }

    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    function isValidPhone(phone) {
        const phonePattern = /^\d{10}$/;
        return phonePattern.test(phone);
    }
});

