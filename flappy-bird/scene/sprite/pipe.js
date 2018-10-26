class Pipes {
    constructor(game) {
        this.active = false
        this.game = game
        this.pipes = []
        this.pipeSpace = 150
        this.HorizontalSpaceOfPipe = 200
        this.columnsOfPipe = 3
        this.speed = 3
        for (var i = 0; i < this.columnsOfPipe; i++) {
            var p1 = LuoImage.new(game, 'pipe')
            var p2 = LuoImage.new(game, 'pipe')
            p1.flipY = true
            p1.x = 600 + i * this.HorizontalSpaceOfPipe
            p2.x = p1.x
            this.resetPipesPosition(p1, p2)
            this.pipes.push(p1)
            this.pipes.push(p2)
        }
    }
    static new(game) {
        return new this(game)
    }
    resetPipesPosition(p1, p2) {
        p1.y = randomBetween(-200, 0)
        p2.y = p1.y + p1.h + this.pipeSpace
    }
    update() {
        if (this.active) {
            for (var p of this.pipes) {
                p.x -= this.speed
                if (p.x < -100) {
                    p.x += this.HorizontalSpaceOfPipe * this.columnsOfPipe
                }
            }
        }
    }
    draw() {
        var context = this.game.context
        for (var p of this.pipes) {
            context.save()

            var w2 = p.w / 2
            var h2 = p.h / 2
            context.translate(p.x + w2, p.y + h2)
            var scaleX = p.flipX ? -1 : 1
            var scaleY = p.flipY ? -1 : 1
            context.scale(scaleX, scaleY)

            context.rotate(p.rotation * Math.PI / 180)
            context.translate(-w2, -h2)

            context.drawImage(p.texture, 0, 0)
            context.restore()
        }
    }
}