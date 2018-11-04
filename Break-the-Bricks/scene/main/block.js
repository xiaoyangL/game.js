class Block extends GuaImage {
    constructor(game, position) {
        super(game, 'block')
        this.setup(position)
    }
    static new(game, position) {
        return new this(game, position)
    }
    setup(position) {
        var p = position
        this.x = p[0]
        this.y = p[1]
        this.alive = true
        this.lifes = p[2] || 1
    }
    kill() {
        var o = this
        o.lifes--
        if (o.lifes < 1) {
            o.alive = false
        }
    }
    collide(b) {
        var o = this
        return o.alive && (rectIntersects(o, b) || rectIntersects(b, o))
    }
}

class Blocks {
    constructor(game) {
        this.game = game
        this.blocks = []
        this.level = Level.instance(game)
    }
    static new(game) {
        return new this(game)
    }
    save(numberOfLevel) {
        var n = numberOfLevel
        var self = this
        // 保存当前关卡数据
        self.level.saveDatas(n, self.blocks)
    }
    load(numberOfLevel) {
        var n = numberOfLevel
        var self = this
        self.blocks = self.level.loadDatas(n)
    }
    push(block) {
        var self = this
        self.blocks.push(block)
    }
    clear() {
        var self = this
        self.blocks = []
    }
    removeDeadBlock(block) {
        var self = this
        if (!block.alive) {
            var p = self.blocks.indexOf(block)
            self.blocks.splice(p, 1)
        }
    }
    draw() {
        var self = this
        for (var i = 0; i < self.blocks.length; i++) {
            var block = self.blocks[i]
            if (block.alive) {
                block.draw()
            }
        }
    }
    update() {}
}
