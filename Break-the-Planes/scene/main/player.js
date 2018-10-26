class Player extends LuoImage {
    constructor(game) {
        super(game, 'player')
        this.setup()
    }
    setup() {
        this.speed = 10
        this.cooldown = 8
    }
    update() {
        if (this.cooldown > 0) {
            this.cooldown--
        }
    }
    fire() {
        if (this.cooldown == 0) {
            this.cooldown = 7
            var x = this.x + this.w / 2
            var y = this.y
            var b = Bullet.new(this.game, 'bullet1')
            b.x = x
            b.y = y
            this.scene.addElement(b)
            this.scene.playerBullets.push(b)
        }
    }
    moveLeft() {
        this.x -= this.speed
        if (this.x <= 0) {
            this.x = 0
        }
    }
    moveRight() {
        this.x += this.speed
        if (this.x >=  450 - this.w) {
            this.x = 450 - this.w
        }
    }
    moveUp() {
        this.y -= this.speed
        if (this.y <= 0) {
            this.y = 0
        }

    }
    moveDown() {
        this.y += this.speed
        if (this.y >= 600 - this.h) {
            this.y = 600 - this.h
        }
    }
}
