const words = ["apple", "banana", "computer", "keyboard", "game", "javascript", "programming", "challenge", "developer", "function"];

const wordDisplay = document.getElementById("word");
const textInput = document.getElementById("textInput");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");

let score = 0;
let time = 10;
let currentWord = "";

function showWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex];
    wordDisplay.textContent = currentWord;
}

function updateScore() {
    score++;
    scoreDisplay.textContent = score;
}

function countdown(){
    time--;
    timeDisplay.textContent = time;
    
    if (time <= 0) {
        clearInterval(timer);
        endGame();}
}

textInput.addEventListener("input", () => {
    if (textInput.value === currentWord) {
        updateScore();
        showWord();
        textInput.value = "";
        time += 2;
    }
});

function endGame(){
    clearInterval(timer);

    textInput.disabled = true;

    document.getElementById("finalScore").textContent = score;
    document.getElementById("gameOver").classList.remove("hidden");
}
showWord();

const timer = setInterval(countdown, 1000); 