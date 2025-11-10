export class PipeObstacle {
    x = 500;
    y = Math.random() * (150 - 50) + 50;
    width = 250;
    height = 500;
    gap = Math.random() * (350 - 200) + 200;
    speed = 10;
    scored = false;

    //pipe parts
    topPipeTopLeft;
    topPipeBottomRight;
    bottomPipeTopLeft;
    bottomPipeBottomRight;

    constructor(canvas, pencil, rocket){
        this.pencil = pencil;
        this.canvas = canvas;
        this.rocket = rocket;
    }

    draw(){
        
        this.topPipeTopLeft = { 
            x : this.x,
            y : this.y - this.height
        }

        this.topPipeBottomRight = { 
            x : this.x + this.width,
            y : this.y - this.height + this.height
        }

        this.bottomPipeTopLeft = {
            x : this.x,
            y : this.y + this.gap
        }

        this.bottomPipeBottomRight = {
            x : this.x + this.width,
            y : this.y + this.gap + this.height
        }

        this.pencil.drawImage(this.rocket, this.x, this.y - this.height, this.width, this.height);
        this.pencil.drawImage(this.rocket, this.x, this.y + this.gap, this.width, this.height);
    }

    move(){
        this.x -= this.speed;
    }
}