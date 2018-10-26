class GuaImage {
    constructor(game, name) {
        this.game = game
        this.texture = game.textureByName(name)
        this.x = 0
        this.y = 0
        this.w = this.texture.width
        this.h = this.texture.height
        //
        this.rotation = 0
        this.flipY = false
        this.flipX = false

    }
    static new(game, name) {
        var i = new this(game, name)
        return i
    }
    draw() {
        this.game.drawImage(this)
    }
    update() {}
    collide(rect) {
        var a = this
        var b = rect
        return rectIntersects(a, b)
    }
    kill() {
        this.scene.removeElement(this)
    }
}