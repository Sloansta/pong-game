// player class will be here.
class Player {
    constructor(x) {
        this.x = x;
        this.size = 20;
        this.speed = 5;
        this.moveLeft = false;
        this.moveRight = false;
    }

    /*getCollision(minX, maxX) {
        if(this.x < minX) 
            this.x = 0;
        else if(this.x > maxX)
            this.x = maxX;
    }*/

    movement() {
        if(this.moveLeft)
            this.x -= this.speed;
        if(this.moveRight)
            this.x += this.speed;
    }

    drawSelf(c) {
        c.fillStyle = 'white';
        c.fillRect(this.x, window.innerHeight - this.size-10, this.size + 100, this.size);
    }
}