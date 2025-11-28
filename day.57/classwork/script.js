document.getElementById("showText").addEventListener("change", function () {
    const txt = document.getElementById("hiddenText");
    txt.style.display = this.checked ? "block" : "none";
});

const emailInput = document.getElementById("email");

emailInput.addEventListener("input", function () {
    const value = emailInput.value;
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    emailInput.style.outline = validEmail.test(value)
        ? "3px solid #4CAF50"
        : "3px solid #e74c3c";
});