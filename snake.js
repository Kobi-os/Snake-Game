// Zdefiniowanie elementów HTML
const board = document.getElementById("game-board");

// Zdefiniowanie zmiennych
const gridSize = 20;
let snake = [{ x: 10, y: 10 }];
let food = generateFood();
let direction = "right";

//Narysowanie planszy, węza i jabłka
function draw() {
    board.innerHTML = "";
    drawSnake();
    drawFood();
}

//Narysowanie węża 
function drawSnake() {
    snake.forEach((segment) => {
        const snakeElement = createGameElement("div", "snake");
        setPosition(snakeElement, segment);
        board.appendChild(snakeElement);
    })
}

//Tworzenie węża i jabłka
function createGameElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

//Ustawienie pozycji węża i jabłka
function setPosition(element, position) {
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
}

//Narysowanie jabłka
function drawFood() {
    const foodElement = createGameElement("div", "food");
    setPosition(foodElement, food);
    board.appendChild(foodElement);
}

// Generowanie jedzenia
function generateFood () {
    const x = Math.floor(Math.random() * gridSize) + 1;
    const y = Math.floor(Math.random() * gridSize) + 1;
    return { x, y };
}

// Poruszanie się węża 
function moveSnake() {
    const head = {...snake[0]};
    switch (direction) {
        case "up":
            head.y--;
            break;
        case "down":
            head.y++;
            break;
        case "left":
            head.x--;
            break;
        case "right":
            head.x++;
            break;
    }

    snake.unshift(head);

    snake.pop();

}

// Poruszanie się węża za pomocą klawiatury
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            direction = "up";
            break;
        case "ArrowDown":
            direction = "down";
            break;
        case "ArrowLeft":
            direction = "left";
            break;
        case "ArrowRight":
            direction = "right";
            break;
    }
})


setInterval(() => {
    moveSnake();
    draw();
}, 200);


