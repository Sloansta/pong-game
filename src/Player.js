// player class will be here.
class Player {
    constructor(x) {
        this.x = x;
        this.size = 20;
    }

    getCollision(minX, maxX) {
        if(this.x < minX) 
            this.x = 0;
        else if(this.x > maxX)
            this.x = maxX;
    }

    moveRight() {
        this.x++;
    }

    moveLeft() {
        this.x--;
    }

    drawSelf(c) {
        c.fillStyle = 'white';
        c.fillRect(this.x, window.innerHeight - this.size, this.size + 10, this.size);
    }
}