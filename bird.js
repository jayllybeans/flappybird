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
        //this detects collisions for the top pipe
        let isFarEnoughRightTop = this.x > pipeObstacle.topPipe.xL;
        let isLowEnoughTop = this.y > pipeObstacle.topPipe.yL;
        let isFarEnoughLeftTop = this.x < pipeObstacle.topPipe.xR;
        let isHighEnoughTop = this.y < pipeObstacle.topPipe.yR;

        //use the logic above to detect for the bottom pipe here:

        let isFarEnoughRightBottom = this.x > pipeObstacle.bottomPipe.xL;
        let isLowEnoughBottom = this.y > pipeObstacle.bottomPipe.yL;
        let isFarEnoughLeftBottom = this.x < pipeObstacle.bottomPipe.xR;
        let isHighEnoughBottom = this.y < pipeObstacle.bottomPipe.yR;

        if((isFarEnoughRightTop && isLowEnoughTop && isFarEnoughLeftTop && isHighEnoughTop) || (isFarEnoughRightBottom && isLowEnoughBottom && isFarEnoughLeftBottom && isHighEnoughBottom))
            return true;
        return false;
    }
}