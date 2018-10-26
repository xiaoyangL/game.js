class Enemy extends LuoImage {
    constructor(game) {
        var type = randomBetween(1, 3)
        var name = 'enemy' + type
        super(game, name)
        this.type = type
        this.setup()
    }
    setup() {
        this.live = true
        this.speed = randomBetween(1, 2)
        this.x = randomBetween(0, 400)
        this.y = -randomBetween(500, 200)
        this.cooldown = randomBetween(200, 300)
    }
    die() {
        this.live = false
    }
    update() {
        this.y += this.speed
        if (this.live && this.y > 600) {
            this.setup()
        }

        if (this.cooldown > 0) {
            this.cooldown--
        }

        if (this.type == 3) {
            this.fire()
        }
    }
    fire() {
        if (this.y > 0 && this.cooldown == 0) {
            this.cooldown = randomBetween(200, 300)

            var x = this.x + this.w / 2
            var y = this.y + this.h
            var b = Bullet.new(this.game, 'bullet2')
            b.x = x
            b.y = y
            this.scene.addElement(b)
            this.scene.enemyBullets.push(b)
        }
    }
}
