class SceneEnd extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }
    setup() {
        this.label = Label.new(this.game)
        this.label.init(50, 250, '游戏结束，按 r 返回界面', 20)
        this.addElement(this.label)
    }
    setupInputs() {
        var game = this.game
        game.registerAction('r', function() {
            var s = SceneTitle.new(game)
            game.replaceScene(s)
        })
    }
}