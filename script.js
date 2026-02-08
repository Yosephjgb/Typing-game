// Display Username
const playerName = document.getElementById("playerName");

const username = localStorage.getItem("username");

if (username) {
    playerName.textContent = username;
}


// Dark Theme Toggle
const toggleBtn = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
}

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const currentTheme = document.body.classList.contains("dark")
        ? "dark"
        : "light";

    localStorage.setItem("theme", currentTheme);
});
