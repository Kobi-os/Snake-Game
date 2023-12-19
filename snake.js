// Zdefiniowanie elementów HTML
const board = document.getElementById("game-board");

// Zdefiniowanie zmiennych
let snake = [{ x: 10, y: 10 }];
let food = generateFood();

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

function generateFood () {
    drawFood().Math.floor(Math.random() * 20) + 1;
}