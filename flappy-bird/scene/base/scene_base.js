class SceneBase extends LuoScene {
    constructor(game) {
        super(game)
    }
    static new(game) {
        return new this(game)
    }
    changeScene(scene) {
        this.active = false
        var g = this.game
        var s = scene.new(g)
        g.replaceScene(s)
    }
    loadBaseElement() {
        var game = this.game
        this.active = true
        this.bg = LuoImage.new(game, 'bg')
        this.bird = Bird.instance(game)
        this.grounds = Grounds.instance(game)
        this.pipe = Pipes.instance(game)
        this.addElement(this.bg)
        this.addElement(this.pipe)
        this.addElement(this.bird)
        this.addElement(this.grounds)
    }
    startGame() {
        // 开始游戏后才让 bird 和 pipe 移动
        this.bird.startMove()
        this.pipe.startMove()
    }
    endGame() {
        // 让所有 element 停止
        this.active = false
        this.pipe.stopMove()
    }
}