class SceneMain extends LuoScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }
    static new(game) {
        return new this(game)
    }
    setup() {
        var game = this.game

        this.active = true
        this.mouseEventControl = true

        this.bg = LuoImage.new(game, 'bg')
        this.title = LuoImage.new(game, 'startTitle')
        this.title.x = 120
        this.title.y = 300
        this.bird = Bird.new(game)
        this.bird.x = 150
        this.bird.y = 250
        log(this.bird)
        this.grounds = Grounds.new(game)
        this.pipe = Pipes.new(game)
        this.addElement(this.bg)
        this.addElement(this.title)
        this.addElement(this.pipe)
        this.addElement(this.bird)
        this.addElement(this.grounds)
    }
    startGame() {
        this.bird.active = true
        this.pipe.active = true
        this.mouseEventControl = false
        this.removeElement(this.title)
    }
    endGame() {
        this.active = false
        this.pipe.active = false
        // 加入结束标题
        var endTitle = LuoImage.new(game, 'endTitle')
        endTitle.x = 120
        endTitle.y = 250
        this.addElement(endTitle)
    }
    setupInputs() {
        var self = this
        var bird = this.bird
        self.game.registerAction('j', function(keyStatus) {
            if (self.active && self.bird.active) {
                bird.jump()
            }
        })
        window.addEventListener('mouseup', function() {
            if (self.mouseEventControl) {
                self.startGame()
            }
        })
    }
    update() {
        super.update()

        var pipes = this.pipe.pipes
        var b = this.bird

        for (var p of pipes) {
            if (p.collide(b)) {
                b.die()
                this.endGame()
            }
        }
    }
    draw() {
        super.draw()
    }
}