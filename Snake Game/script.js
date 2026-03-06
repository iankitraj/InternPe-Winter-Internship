const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;

let snake = [{ x: 200, y: 200 }];

let food = randomFood();

let direction = "RIGHT";

let score = 0;

let speed = 200; // starting slow speed
let game;

let highScore = localStorage.getItem("snakeHighScore") || 0;

document.getElementById("highScore").innerText = highScore;

document.addEventListener("keydown", changeDirection);

let pulse = 0;



function startGame() {
    game = setInterval(draw, speed);
}

startGame();



function changeDirection(e) {

    if (e.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
    else if (e.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
    else if (e.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
    else if (e.key === "ArrowDown" && direction !== "UP") direction = "DOWN";

}



function randomFood() {

    return {
        x: Math.floor(Math.random() * 20) * box,
        y: Math.floor(Math.random() * 20) * box
    }

}



function drawRoundedRect(x, y, size, color) {

    ctx.fillStyle = color;

    ctx.beginPath();
    ctx.roundRect(x, y, size, size, 6);
    ctx.fill();

}



function drawSnake() {

    snake.forEach((part, index) => {

        if (index == 0) {

            drawRoundedRect(part.x, part.y, box, "#22c55e");

            ctx.fillStyle = "white";

            ctx.beginPath();
            ctx.arc(part.x + 6, part.y + 7, 2, 0, Math.PI * 2);
            ctx.arc(part.x + 14, part.y + 7, 2, 0, Math.PI * 2);
            ctx.fill();

        } else {

            drawRoundedRect(part.x, part.y, box, "#4ade80");

        }

    });

}



function drawFood() {

    pulse += 0.1;

    let size = 8 + Math.sin(pulse) * 2;

    ctx.fillStyle = "red";

    ctx.beginPath();
    ctx.arc(food.x + 10, food.y + 10, size, 0, Math.PI * 2);
    ctx.fill();

}



function increaseSpeed() {

    if (score % 5 === 0) {

        speed -= 20;

        if (speed < 80) {
            speed = 80;
        }

        clearInterval(game);
        game = setInterval(draw, speed);

    }

}



function draw() {

    ctx.fillStyle = "#020617";
    ctx.fillRect(0, 0, 400, 400);

    drawSnake();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction === "LEFT") snakeX -= box;
    if (direction === "RIGHT") snakeX += box;
    if (direction === "UP") snakeY -= box;
    if (direction === "DOWN") snakeY += box;

    if (
        snakeX < 0 || snakeX >= 400 ||
        snakeY < 0 || snakeY >= 400 ||
        collision({ x: snakeX, y: snakeY }, snake)
    ) {

        clearInterval(game);

        alert("Game Over");

        if (score > highScore) {
            localStorage.setItem("snakeHighScore", score);
        }

    }



    if (snakeX === food.x && snakeY === food.y) {

        score++;

        document.getElementById("score").innerText = score;

        food = randomFood();

        increaseSpeed(); // 👈 speed increase here

    } else {

        snake.pop();

    }



    let newHead = { x: snakeX, y: snakeY };

    snake.unshift(newHead);

}



function collision(head, array) {

    for (let i = 0; i < array.length; i++) {

        if (head.x === array[i].x && head.y === array[i].y) {
            return true;
        }

    }

    return false;

}



function restartGame() {
    location.reload();
}