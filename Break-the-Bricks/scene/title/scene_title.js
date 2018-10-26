class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }
    setup() {
        this.label = Label.new(this.game)
        this.label.init(100, 250, '按 e 编辑游戏', 50)
        this.addElement(this.label)
    }
    setupInputs() {
        var game = this.game
        game.registerAction('e', function() {
            var s = SceneLevel.new(game)
            game.replaceScene(s)
        })
    }
}