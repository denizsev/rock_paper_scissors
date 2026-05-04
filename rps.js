let playerScore = 0;
let computerScore = 0;
let gameOver = false;

const choices = ["rock", "paper", "scissors"];

const playerScoreEl = document.getElementById("playerScore");
const computerScoreEl = document.getElementById("computerScore");
const resultEl = document.getElementById("result");
const restartBtn = document.getElementById("restart");

function getWinner(player, computer) {
    if (player === computer) return "draw";

    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "player";
    }

    return "computer";
}

function flashEffect(type) {
    let className = "";

    if (type === "win") className = "flash-win";
    if (type === "lose") className = "flash-lose";
    if (type === "draw") className = "flash-draw";

    document.body.classList.add(className);
    setTimeout(() => document.body.classList.remove(className), 300);
}

function updateUI(player, computer, result) {

    if (result === "draw") {
        resultEl.innerHTML = `Draw!<br<You: ${player} - Computer: ${computer}`;
        flashEffect("draw");
        return;
    }

    if (result === "player") {
        playerScore++;
        resultEl.innerHTML = `You win!<br>${player} beats ${computer}`;
        flashEffect("win");
    } else {
        computerScore++;
         resultEl.innerHTML = `You lose<br>${computer} beats ${player}`;
        flashEffect("lose");
    }

    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;

    if (playerScore === 3 || computerScore === 3) {
        gameOver = true;

        if (playerScore === 3) {
            resultEl.textContent = "🏆 You won the game!";
        } else {
            resultEl.textContent = "💻 Computer won the game!";
        }
    }
}

function play(choice) {
    if (gameOver) return;

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = getWinner(choice, computerChoice);

    updateUI(choice, computerChoice, result);
}

// ✅ FIX: doğru event binding (data-choice kullanıyoruz)
document.querySelectorAll(".choice").forEach(btn => {
    btn.addEventListener("click", () => {
        const choice = btn.dataset.choice;
        play(choice);
    });
});

// restart
restartBtn.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    gameOver = false;

    playerScoreEl.textContent = "0";
    computerScoreEl.textContent = "0";
    resultEl.textContent = "Choose your move";
});