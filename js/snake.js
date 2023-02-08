console.log("connected")
const canvas = document.getElementById('canvas');
const pen = canvas.getContext('2d');
pen.fillStyle = 'blue'; 
let size = 15;
let food = null;
let cs = 30;
let gameOver = false;
const snake = {
    initialL: 15,
    initialD: 'ArrowRight',
    cell: [],
    creatSnake: function () {
        for (let i = 10; i < this.initialL; i++) {
            this.cell.push({ x: i, y: 18 });
        }
    },
    drawSnake: function () {
        for (let c of this.cell) {
            pen.fillRect(c.x * cs, cs * c.y, cs - 1, cs - 1);
        }
    },
    updateSnake: function () {
        let headX = this.cell[this.cell.length - 1].x
        let headY = this.cell[this.cell.length - 1].y
        if (headX == food.x && headY == food.y) {
            this.cell.push({ x: food.x, y: food.y });
            pen.fillRect(this.cell.x * cs, cs * this.cell.y, cs - 1, cs - 1);
            randomFood();
        }
        let nextX;
        let nextY;
        if (this.initialD == 'ArrowRight') {
            nextX = headX + 1;
            nextY = headY;
            if (nextX * (cs) >= 1170) {
                pen.fillText('Gameover',100,100)
                clearInterval(stop);
            }
        }
        else if (this.initialD == 'ArrowDown') {
            nextX = headX;
            nextY = headY + 1;
            if (nextY * cs >= 530) {
                pen.fillText('Gameover',100,100)
                clearInterval(stop);
            }
        }
        else if (this.initialD == 'ArrowUp') {
            nextX = headX;
            nextY = headY - 1;
            if (nextY * cs <= 0) {
                pen.fillText('Gameover',100,100)
                clearInterval(stop);
                
            }
        }
        else if (this.initialD == 'ArrowLeft') {
            nextX = headX - 1;
            nextY = headY;
            if (nextX * cs <= 0) {
                pen.fillText('Gameover',100,100)
                clearInterval(stop);
            }
        }
        this.cell.push({
            x: nextX, y: nextY
        });
        this.cell.shift();
    },
};
function initilize() {
    snake.creatSnake();
    food = randomFood();
    function keyPressed(e) {
        if (e.key == 'ArrowRight') {
            snake.initialD = e.key;
        }
        else if (e.key == 'ArrowDown') {
            snake.initialD = e.key;
        }
        else if (e.key == 'ArrowUp') {
            snake.initialD = e.key;
        }
        else if (e.key == 'ArrowLeft') {
            snake.initialD = e.key;
        }
    }
    document.addEventListener('keydown', keyPressed)
    randomFood();
}
function update() {
    pen.clearRect(0, 0, 1200, 560)
    snake.updateSnake();
}
function draw() {
    snake.drawSnake();
    pen.fillStyle = 'white'
    pen.font = '40px';
    pen.fillRect(food.x * cs, cs * food.y, cs - 1, cs - 1);
    pen.fillStyle = 'blue'
}
function gameloop() {
    if(gameOver == true)return ;
    update();
    draw();
}
function randomFood() {
    let foodX = Math.round((Math.random() * 1170) / cs);
    let foodY = Math.round((Math.random() * 530) / cs);
    food = { x: foodX, y: foodY };
    console.log(foodX, foodY);
    return food;
}
initilize();
let stop = setInterval(gameloop, 100);