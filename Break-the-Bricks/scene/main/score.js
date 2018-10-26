class Score {
    constructor(game) {
        this.game = game
        this.setup()
    }
    static new(game) {
        var i = new this(game)
        return i
    }
    setup() {
        this.x = 200
        this.y = 400
        this.score = 0
        this.text = '得分: ' + this.score
    }
    increase() {
        var self = this
        self.score += 100
        self.text = '得分: ' + self.score
    }
    draw() {
        var g = this.game
        var self = this
        g.context.save()
        g.context.font = "50px serif";
        g.context.fillText(self.text, self.x, self.y)
        g.context.restore()
    }
    update() {}
}