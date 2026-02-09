const words = [
    "javascript",
    "developer",
    "keyboard",
    "challenge",
    "function",
    "variable",
    "browser",
    "coding"
];

const wordDisplay = document.getElementById("word");
const textInput = document.getElementById("textInput");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("startBtn");
const gameOverScreen = document.getElementById("gameOver");
const finalScore = document.getElementById("finalScore");

let score = 0;
let time = 10;
let timer;
let currentWord = "";


function showWord() {
    const randomIndex = Math.floor(Math.random() * activeWords.length);
    currentWord = activeWords[randomIndex];
    wordDisplay.textContent = currentWord;
}



function startGame() {

    currentDifficulty = difficultySelect.value;

    const settings = difficultySettings[currentDifficulty];

    score = 0;
    time = settings.time;
    bonusTime = settings.bonus;
    activeWords = settings.words;

    scoreDisplay.textContent = score;
    timeDisplay.textContent = time;

    textInput.disabled = false;
    textInput.value = "";
    textInput.focus();

    difficultySelect.disabled = true;

    gameOverScreen.classList.add("hidden");

    showWord();

    clearInterval(timer);
    timer = setInterval(countdown, 1000);
}


// Countdown Timer
function countdown() {
    time--;
    timeDisplay.textContent = time;

    if (time <= 0) {
        endGame();
    }
}


// End Game
function endGame() {
    clearInterval(timer);

    textInput.disabled = true;

    finalScore.textContent = score;
    gameOverScreen.classList.remove("hidden");
    difficultySelect.disabled = false;

}


// Check Input
textInput.addEventListener("input", () => {

    if (textInput.value === currentWord) {

        score++;
        time += bonusTime;


        scoreDisplay.textContent = score;
        timeDisplay.textContent = time;

        textInput.value = "";

        showWord();
    }
});

const difficultySelect = document.getElementById("difficultySelect");

const difficultySettings = {
    easy: {
        time: 15,
        bonus: 3,
        words: ["cat", "dog", "sun", "book", "tree", "code"]
    },
    medium: {
        time: 10,
        bonus: 2,
        words: [
            "javascript",
            "developer",
            "keyboard",
            "function",
            "variable"
        ]
    },
    hard: {
        time: 7,
        bonus: 1,
        words: [
            "asynchronous",
            "architecture",
            "polymorphism",
            "encyclopedia",
            "configuration"
        ]
    }
};

let currentDifficulty = "medium";
let activeWords = [];
let bonusTime = 2;

// Start Button
startBtn.addEventListener("click", startGame);

   