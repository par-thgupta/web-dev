const canvas = document.getElementById('canvas');
const element = canvas.getContext('2d');
element.fillStyle = 'red'
let initilizeX = 0;
let initilizeY = 0;
function initilize(){
    element.fillRect(initilizeX,initilizeY,10,10)
}
function update(){
    initilizeX += 10
}

function draw(){
    if(initilizeX == 300){
        alert("game over")
        initilizeX = 0;
        initilizeY = 0;
        element.fillRect(initilizeX,initilizeY,10,10)
    }
    element.clearRect(0,0,1000,500)
    element.fillRect(initilizeX,initilizeY,10,10)
}

function gameloop(){
    console.log('gameloop')
    update();
    draw();    
}
initilize()
let loop = setInterval(() => {gameloop();}, 100);