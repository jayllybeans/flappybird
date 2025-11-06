export class PipeObstacle {
    x = 500;
    y = Math.random() * (150 - 50) + 50;
    width = 250;
    height = 500;
    gap = Math.random() * (350 - 250) + 250;
    speed = 10;

    //pipe parts

    constructor(canvas, pencil, rocket){
        this.pencil = pencil;
        this.canvas = canvas;
        this.rocket = rocket;
    }

    draw(){
        this.pencil.drawImage(this.rocket, this.x, this.y - (this.height - this.y), this.width, this.height);
        this.pencil.drawImage(this.rocket, this.x, this.y + this.gap, this.width, this.height);
    }

    move(){
        this.x -= this.speed;
    }
}