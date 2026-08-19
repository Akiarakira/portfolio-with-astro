// Change theme

const themeToggle = document.querySelector("#themeToggle");
const bodyElement = document.querySelector("#body");
const THEME_KEY = "portfolio-theme";

if (bodyElement) {
  function getPreferredTheme() {
    return localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark";
  }

  function applyTheme(theme) {
    const isDark = theme === "dark";
    bodyElement.classList.toggle("darkMode", isDark);
    bodyElement.classList.toggle("lightMode", !isDark);

    if (themeToggle) {
      themeToggle.checked = isDark;
    }
  }

  applyTheme(getPreferredTheme());

  themeToggle?.addEventListener("change", function () {
    const next = themeToggle.checked ? "dark" : "light";
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  });
}
