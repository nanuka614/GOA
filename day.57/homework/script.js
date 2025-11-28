// 14) Checkbox toggle text
const checkbox = document.getElementById("showTextCheckbox");
const checkboxText = document.getElementById("checkboxText");
checkbox.addEventListener("change", function() {
    checkboxText.style.display = this.checked ? "inline" : "none";
});