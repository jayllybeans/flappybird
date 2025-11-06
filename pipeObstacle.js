export class PipeObstacle {
    x = 500;
    y = Math.random() * (150 - 50) + 50;
    width = 250;
    height = 500;
    gap = Math.random() * (350 - 200) + 200;
    speed = 10;

    //pipe parts

    topPipe = { xL : this.x, yL : this.y, xR : this.x + this.width, yR : this.y - (this.height - this.y)};
    bottomPipe = { xL : this.x, yL : this.y + this.gap, xR : this.x + this.width, yR : this.y + this.gap + this.height};

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