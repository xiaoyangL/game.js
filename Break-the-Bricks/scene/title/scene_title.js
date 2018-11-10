class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }
    setup() {
        var game = this.game
        this.active = true
        this.startRect = Rect.new(game)
        this.editRect = Rect.new(game)
        // x, y, width, height, color, text, fontSize, fontColor
        this.startRect.init(200, 100, 200, 80, 'green', '开始游戏', 30, 'white')
        this.editRect.init(200, 300, 200, 100, 'green', '编辑游戏', 30, 'white')

        this.addElement(this.startRect)
        this.addElement(this.editRect)
    }
    setupInputs() {
        var game = this.game
        var self = this
        // mouse event
        game.canvas.addEventListener('mousedown', function(event) {
            if (self.active) {
                var x = event.offsetX
                var y = event.offsetY
                if (pointInRect(self.startRect, x, y)) {
                    var s = SceneMain.new(game)
                    game.replaceScene(s)
                } else if (pointInRect(self.editRect, x, y)) {
                    var s = SceneLevel.new(game)
                    game.replaceScene(s)
                }
                self.active = false
            }
        })
    }
}