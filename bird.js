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
        let isFarEnoughRightTop = this.x > pipeObstacle.topPipeTopLeft.x;
        let isLowEnoughTop = this.y > pipeObstacle.topPipeTopLeft.y;
        let isFarEnoughLeftTop = this.x < pipeObstacle.topPipeBottomRight.x;
        let isHighEnoughTop = this.y < pipeObstacle.topPipeBottomRight.y;

        let isFarEnoughRightBottom = this.x > pipeObstacle.bottomPipeTopLeft.x;
        let isLowEnoughBottom = this.y > pipeObstacle.bottomPipeTopLeft.y;
        let isFarEnoughLeftBottom = this.x < pipeObstacle.bottomPipeBottomRight.x;
        let isHighEnoughBottom = this.y < pipeObstacle.bottomPipeBottomRight.y;

        //use the logic above to detect for the bottom pipe here:

        if((isFarEnoughRightTop && isLowEnoughTop && isFarEnoughLeftTop && isHighEnoughTop) || (isFarEnoughRightBottom && isLowEnoughBottom && isFarEnoughLeftBottom && isHighEnoughBottom))
            return true;
        return false;
    }
}