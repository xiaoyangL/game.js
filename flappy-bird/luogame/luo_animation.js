class LuoAnimation {
    constructor(game) {
        this.game = game
        this.frames = []
        this.texture = new Image()
        this.x = 0
        this.y = 0
        this.frameCount = 3
        this.frameIndex = 0
    }
    static new (game) {
        return new this(game)
    }

    addFrames(imgName, numbersOfImgs) {
        for (var i = 1; i < numbersOfImgs + 1; i++) {
            var name = `${imgName}${i}`
            var w = this.game.textureByName(name)
            this.frames.push(w)
        }
        this.reset()
    }

    reset() {
        this.texture = this.frames[0]
        this.w = this.texture.width
        this.h = this.texture.height
    }

    update() {
        this.frameCount--
        if (this.frameCount == 0) {
            this.frameCount = 3
            this.frameIndex = (this.frameIndex + 1) % this.frames.length
            this.texture = this.frames[this.frameIndex]
        }
    }
    draw() {
        this.game.drawImage(this)
    }
}
