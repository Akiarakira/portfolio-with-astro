// Change theme

const themeToggle = document.querySelector("#themeToggle");
const bodyElement = document.querySelector("#body");

if (themeToggle && bodyElement) {
    themeToggle.checked = bodyElement.classList.contains("darkMode");

    themeToggle.addEventListener("change", function() {
        if (themeToggle.checked) {
            bodyElement.classList.add("darkMode");
            bodyElement.classList.remove("lightMode");
        } else {
            bodyElement.classList.add("lightMode");
            bodyElement.classList.remove("darkMode");
        }
    });
}
