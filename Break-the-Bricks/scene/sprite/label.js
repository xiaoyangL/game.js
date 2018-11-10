class Label {
    constructor(game) {
        this.game = game
    }
    static new(game) {
        var i = new this(game)
        return i
    }
    init(x, y, text, fontSize, fontColor) {
        this.x = x
        this.y = y
        this.text = text
        this.fontSize = fontSize
        this.fontColor = fontColor
    }
    draw() {
        var g = this.game
        var self = this
        g.context.save()
        g.context.font = self.fontSize + "px serif";
        g.context.fillStyle = self.fontColor
        g.context.fillText(self.text, self.x, self.y)
        g.context.restore()
    }
    update() {}
    updateText(text) {
        var self = this
        self.text = text
    }
}