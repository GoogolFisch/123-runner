class ObstacleComponent extends GameComponent {
    constructor(width, height,  x, y) {
        super(width, height, "red", x, y)

        this.gavePoint = false;
    }

    move(dt,gameSpeed) {
        this.x += -dt * gameSpeed;
    }
}
