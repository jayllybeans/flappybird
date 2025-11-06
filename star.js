export class Star {
    x = 0;
    y = 0;
    z = 0;
    color = "white";

    constructor(canvas, pencil){
        this.pencil = pencil;
        this.x = canvas.width * Math.random();
        this.y = canvas.height * Math.random();
        this.z = Math.random();
    }

    draw() {
        this.pencil.beginPath();
        this.pencil.arc(this.x, this.y, 2, 0, Math.PI * 2);
        this.pencil.fillStyle = this.color;
        this.pencil.fill();
        this.pencil.closePath();
    }

    move(){
        let speed = 2 + (1 - this.z) * 6;
        this.x -= speed;
    }
}