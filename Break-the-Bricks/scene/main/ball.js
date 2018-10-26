class Ball extends GuaImage {
    constructor(game, name) {
        super(game, 'ball')
        this.setup()
    }
    setup() {
        this.speedX = 5
        this.speedY = 5
        this.fired = false
    }
    fire() {
        this.fired = true
    }
    move() {
        var o = this
        if (o.fired) {
            // log('move')
            if (o.x < 0 || o.x > 600 - o.w) {
                o.speedX = -o.speedX
            }
            if (o.y < 0 || o.y > 600 - o.h) {
                o.speedY = -o.speedY
            }
            // move
            o.x += o.speedX
            o.y += o.speedY
        }
    }
    反弹() {
        this.speedY *= -1
    }
    update() {
        this.move()
    }
}