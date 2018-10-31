class SceneMain extends SceneBase {
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
        this.startGame()
    }
    setupInputs() {
        var self = this
        var bird = this.bird
        self.game.registerAction('j', function() {
            if (self.active && self.bird.active) {
                bird.jump()
            }
        })
    }
    update() {
        super.update()
        var pipes = this.pipe.pipes
        var bird = this.bird

        for (var p of pipes) {
            if (p.collide(bird)) {
                this.changeScene(SceneEnd)
            }
        }
    }
}