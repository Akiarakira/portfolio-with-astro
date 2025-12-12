// Change theme

const lightMode = document.querySelector("#lightMode");
const darkMode = document.querySelector("#darkMode");
const bodyElement = document.querySelector("#body");

lightMode.addEventListener("click", function() {
    console.log("click en light mode");
    bodyElement.classList.add("lightMode");
    bodyElement.classList.remove("darkMode");
    lightMode.classList.add("active");
    darkMode.classList.remove("active");
})

darkMode.addEventListener("click", function() {
    console.log("click en dark mode");
    bodyElement.classList.add("darkMode");
    bodyElement.classList.remove("lightMode");
    lightMode.classList.remove("active");
    darkMode.classList.add("active");
})
