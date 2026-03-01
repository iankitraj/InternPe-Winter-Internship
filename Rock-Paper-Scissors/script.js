let userScore = 0;
let computerScore = 0;

const icons = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️"
};

function play(userChoice) {
    document.getElementById("status").innerText = "Computer's Turn";

    setTimeout(() => {
        const choices = ["rock", "paper", "scissors"];
        const computerChoice = choices[Math.floor(Math.random() * 3)];

        document.getElementById("userChoice").innerText = icons[userChoice];
        document.getElementById("computerChoice").innerText = icons[computerChoice];

        let result = "";

        if (userChoice === computerChoice) {
            result = "It's a Draw!";
        }
        else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            userScore++;
            document.getElementById("userScore").innerText = userScore;
            result = "You Win!";
        }
        else {
            computerScore++;
            document.getElementById("computerScore").innerText = computerScore;
            result = "Computer Wins!";
        }

        document.getElementById("result").innerText = result;
        document.getElementById("status").innerText = "Your Turn";

    }, 800); // delay for real feel
}