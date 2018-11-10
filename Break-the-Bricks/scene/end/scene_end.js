class SceneEnd extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }
    setup() {
        var game = this.game
        var bg = GuaImage.new(game, 'bg')

        var label = Label.new(game)
        label.init(250, 250, '游戏结束', 30, 'white')

        this.addElement(bg)
        this.addElement(label)
    }
    setupInputs() {
        var game = this.game
    }
}