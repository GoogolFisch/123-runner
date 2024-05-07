class GameComponent {
    constructor(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
    }

    getGroundContactY() {
        return groundY - this.height;
    }

    isTouching(comp) {
	    // top left
        var pointTL = new Point(this.x + 3, this.y + 3);
	    // bottom right
        var pointBR = new Point(this.x + this.width - 3, this.y + this.height - 3);

        var playerTL = new Point(comp.x, comp.y);
        var playerBR = new Point(comp.x + comp.width, comp.y + comp.height);

        if (pointTL.x > playerBR.x || playerTL.x > pointBR.x)
            return false;

        if (pointTL.y > playerBR.y || playerTL.y > pointBR.y)
            return false;

        /*if (minX <= comp.x && maxX >= comp.x && minY <= comp.y && maxY >= comp.y)
            return true;*/

        return true;
    }

    move(dt,gameSpeed) {
        this.y += dt;
    }
    
    setPos(x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        let ctx = gameArea.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
