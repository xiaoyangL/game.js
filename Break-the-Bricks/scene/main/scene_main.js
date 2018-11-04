class SceneMain extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }
    static new(game) {
        return new this(game)
    }
    setup(level) {
        var self = this
        // 初始化
        var game = this.game
        this.bg = GuaImage.new(game, 'bg')
        this.score = Score.new(game)
        this.paddle = Paddle.new(game)
        this.ball = Ball.new(game)
        this.blocks = Blocks.new(game)
        this.blocks.load(1)

        this.addElement(this.bg)
        this.addElement(this.score)
        this.addElement(this.paddle)
        this.addElement(this.ball)
        this.addElement(this.blocks)

    }
    setupInputs() {
        var self = this
        var game = this.game
        game.registerAction('a', function() {
            self.paddle.moveLeft()
        })
        game.registerAction('d', function() {
            self.paddle.moveRight()
        })
        game.registerAction('f', function() {
            self.ball.fire()
        })
    }
    draw() {
        super.draw()
    }
    update() {
        super.update()

        var self = this
        if (window.paused) {
            return
        }

        self.gameOver()
        self.checkCollision()

    }
    checkCollision() {
        var self = this
        // 判断 paddle 和 ball 相撞
        if (self.paddle.collide(self.ball)) {
            self.ball.反弹()
        }
        // 判断 ball 和 block 相撞
        var blocks = self.blocks.blocks
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i]
            if (block.collide(self.ball)) {
                // log('block 相撞')
                block.kill()
                self.blocks.removeDeadBlock(block)
                //
                self.ball.反弹()
                // 更新分数
                self.score.increase()
            }
        }
    }
    gameOver() {
        var self = this
        var game = this.game
        // 判断游戏结束
        if (self.ball.y > self.paddle.y) {
            // 跳转到 游戏结束 的场景
            var end = SceneEnd.new(game)
            game.replaceScene(end)
        }
    }
}
