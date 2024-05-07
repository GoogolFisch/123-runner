
class SpeedyEnemy extends GameComponent {
    constructor(width, height,  x, y) {
        super(width, height, "purple", x, y)

        this.gavePoint = false;
    }
    move(dt,gameSpeed) {
        this.x += -dt * gameSpeed * 1.3;
    }
}
