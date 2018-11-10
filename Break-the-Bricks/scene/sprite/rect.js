class Rect {
    constructor(game) {
        this.game = game
    }
    static new(game) {
        var i = new this(game)
        return i
    }
    init(x, y, width, height, color, text, fontSize, fontColor) {
        this.x = x
        this.y = y
        this.w = width
        this.h = height
        this.color = color
        this.text = text
        this.fontSize = fontSize
        this.fontColor = fontColor
    }
    draw() {
        var context = this.game.context
        var self = this

        var label = Label.new(this.game)
        // x, y, text, fontSize, fontColor
        var labelX = self.x + self.w / 5
        var labelY = self.y + self.h / 1.8
        label.init(labelX, labelY, self.text, self.fontSize, self.fontColor)
        this.scene.addElement(label)

        context.save()
        context.fillStyle = self.color
        context.fillRect(self.x, self.y, self.w, self.h)
        context.restore()

    }
    update() {}
}