document.addEventListener("DOMContentLoaded", () => {

    // Username
    const playerName = document.getElementById("playerName");
    const username = localStorage.getItem("username");
    if (playerName) {
        playerName.textContent = username || "Guest";
    }

    // Apply saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }

    // Navbar theme toggle
    const toggleBtn = document.getElementById("themeToggle");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark");

            localStorage.setItem(
                "theme",
                document.body.classList.contains("dark") ? "dark" : "light"
            );
        });
    }

    // Footer theme toggle (optional)
    const footerThemeBtn = document.querySelector(".footer-theme-btn");
    if (footerThemeBtn) {
        footerThemeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark");

            localStorage.setItem(
                "theme",
                document.body.classList.contains("dark") ? "dark" : "light"
            );
        });
    }
});
