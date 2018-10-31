class SceneTitle extends SceneBase {
    constructor(game) {
        super(game)
        this.loadBaseElement()
        this.setup()
        this.setupInputs()
    }
    static new(game) {
        return new this(game)
    }
    setup() {
        this.active = true
        this.title = LuoImage.new(this.game, 'startTitle')
        this.title.x = 120
        this.title.y = 300
        this.addElement(this.title)
    }
    setupInputs() {
        var self = this
        var g = this.game
        window.addEventListener('mouseup', function() {
            if (self.active) {
                self.changeScene(SceneMain)
            }
        })
    }
}