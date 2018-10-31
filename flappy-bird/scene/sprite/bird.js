class Bird extends LuoAnimation {
    constructor(game) {
        super(game)
        this.addFrames('bird', 3)
        this.setup()
    }
    static instance(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }
    setup() {
        this.x = 150
        this.y = 250
        this.active = false
        // 重力和加速度
        this.gy = 10
        this.vy = 0
        this.rotation = 0
    }
    jump() {
        this.vy = -10
        this.rotation = -45
    }
    die() {
        this.vy = 30
        this.rotation = 90
    }
    update() {
        if (this.active) {
            // 更新受力
            this.y += this.vy
            this.vy += this.gy * 0.2

            var h = 500
            if (this.y > h) {
                this.y = h
                //
                this.scene.changeScene(SceneEnd)
            }
            // 更新角度
            if (this.rotation < 90) {
                this.rotation += 5
            }
        }
        // 走完死亡画面再 return
        if (!this.scene.active) {
            return
        }

        super.update()
    }
    draw() {
        var context = this.game.context
        context.save()

        var w2 = this.w / 2
        var h2 = this.h / 2

        context.translate(this.x + w2, this.y + h2)
        context.rotate(this.rotation * Math.PI / 180)
        context.translate(-w2, -h2)

        context.drawImage(this.texture, 0, 0)
        context.restore()
    }
}