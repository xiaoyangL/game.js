class Paddle extends GuaImage {
    constructor(game, name) {
        super(game, 'paddle')
        this.setup()
    }
    setup() {
        this.speed = 15
        this.x = 180
        this.y = 280
    }
    move(x) {
        var o = this
        if (x < 0) {
            x = 0
        }
        if (x > 600 - o.w) {
            x = 600 - o.w
        }
        o.x = x
    }
    moveLeft() {
        this.move(this.x - this.speed)
    }
    moveRight() {
        this.move(this.x + this.speed)
    }
}