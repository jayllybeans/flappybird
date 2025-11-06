let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");

import {Star} from "./star.js";
import {PipeObstacle} from "./pipeObstacle.js";
import {Bird} from "./bird.js";

let stars = [];

for (let i = 0; i < 1000; i++){
    stars.push(new Star(canvas, pencil));
}

let score = 0;
let rocket = document.getElementById("rocketObstacle");
let pipe = new PipeObstacle(canvas, pencil, rocket);
let ufo = document.getElementById("ufoPlayer");
let player = new Bird(canvas, pencil, ufo);

pencil.imageSmoothingEnabled = false;

function raiseScore() {
    score += 1;
    let scoreElement = document.getElementById("scoreDisplay");
    scoreElement.innerHTML = "SCORE: " + score;
}
setInterval(raiseScore, 1000);

function moveUp(){
    player.y += 10;
}

function gameLoop() {
    //erase canvas
    pencil.clearRect(0, 0, canvas.width, canvas.height);
    //draw background
    pencil.fillStyle = "black";
    pencil.fillRect(0, 0, canvas.clientWidth, canvas.height);

    //draw stars
    for(let i = 0; i < stars.length; i++){
        stars[i].draw();
    }
    //the stars go shimmy
    for(let i = 0; i < stars.length; i++){
        stars[i].move();
    }
    //recycle stars
    for(let i = 0; i < stars.length; i++){
        if (stars[i].x < 0) {
            stars[i].x = canvas.width;
            stars[i].y = Math.random() * canvas.height;
          }
    }

    //pipes
    pipe.draw();
    pipe.move();
    if (pipe.x < -pipe.width){
        pipe.x = canvas.width;
        pipe.y = Math.random() * (150 - 50) + 50;
        pipe.gap = Math.random() * (350 - 250) + 250;
    }

    //draw bird
    player.draw();
    player.gravity();
}

setInterval(gameLoop, 50);