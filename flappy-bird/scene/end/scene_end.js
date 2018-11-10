class SceneEnd extends SceneBase {
    constructor(game) {
        super(game)
        this.loadBaseElement()
        this.setup()
        this.endGame()
    }
    static new(game) {
        return new this(game)
    }
    setup() {
        // 加入结束标题
        this.endTitle = LuoImage.new(this.game, 'endTitle')
        this.endTitle.x = 120
        this.endTitle.y = 250
        this.addElement(this.endTitle)
    }
    update() {
        super.update()
        this.bird.fall()
    }
}