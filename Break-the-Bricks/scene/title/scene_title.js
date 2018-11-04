class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }
    setup() {
        var game = this.game
        this.bg = GuaImage.new(game, 'bg')
        this.editLabel = Label.new(game)
        this.editLabel.init(150, 200, '按 e 编辑游戏', 50, '#FFF')
        this.startLable = Label.new(game)
        this.startLable.init(150, 300, '按 k 开始游戏', 50, '#FFF')

        this.addElement(this.bg)
        this.addElement(this.editLabel)
        this.addElement(this.startLable)

    }
    setupInputs() {
        var game = this.game
        game.registerAction('e', function() {
            var s = SceneLevel.new(game)
            game.replaceScene(s)
        })
        game.registerAction('k', function() {
            var s = SceneMain.new(game)
            game.replaceScene(s)
        })
    }
}
