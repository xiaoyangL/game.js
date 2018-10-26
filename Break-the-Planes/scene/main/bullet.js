class Bullet extends LuoImage {
    constructor(game, name) {
        super(game, name)
        this.setup()
    }
    setup() {
        this.live = true
        this.speed = 5
    }
    update() {
        var s = this.scene
        var b = this

        // 玩家子弹的移动轨迹
        if (s.playerBullets.includes(b)) {
            b.y -= b.speed
            if (b.y < -10) {
                b.die()
            }
        }
        // 敌人子弹的移动轨迹
        if (s.enemyBullets.includes(b)) {
            b.y += b.speed
            if (b.y >= 600) {
                b.die()
            }
        }
    }
    die() {
        this.live = false
    }
}
