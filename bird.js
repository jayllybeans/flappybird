export class Bird{
    x = 0;
    y = 0;
    ySpeed = 1;
    maxYSpeed = 20;

    constructor(canvas, pencil, ufo, keyPressed){
        this.canvas = canvas;
        this.pencil = pencil;
        this.ufo = ufo;
        this.keyPressed = keyPressed;
    }

    draw(){
        this.pencil.drawImage(this.ufo, this.x, this.y, 150, 50);
    }

    gravity(){
        this.y += this.ySpeed;
        this.ySpeed += .15;
        if (this.ySpeed > this.maxYSpeed){
            this.ySpeed = this.maxYSpeed;
        }
    }

    move(){
        this.ySpeed = -2;
    }

    isCollision(pipeObstacle){
        
    }
}