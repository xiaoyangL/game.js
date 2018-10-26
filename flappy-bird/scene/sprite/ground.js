class Grounds {
    constructor(game, name) {
        this.game = game
        this.grounds = []
        this.skipCount = 4

        for (var i = 0; i < 25; i++) {
            var g = LuoImage.new(game, 'ground')
            g.x = i * 20
            g.y = 530
            this.grounds.push(g)
        }
    }
    static new(game) {
        return new this(game)
    }
    update() {
        if (!this.scene.active) {
            return
        }

        this.skipCount--

        var offset = -5
        if (this.skipCount == 0) {
            this.skipCount = 4
            offset = 15
        }

        for (var g of this.grounds) {
            g.x += offset
        }
    }
    draw() {
        for (var g of this.grounds) {
            this.game.drawImage(g)
        }
    }
}