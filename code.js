let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");

import {Star} from "./star.js";

let stars = [new Star(canvas, pencil)];

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
        stars[i].draw();
    }
    //recycle stars
}

setInterval(gameLoop, 50);