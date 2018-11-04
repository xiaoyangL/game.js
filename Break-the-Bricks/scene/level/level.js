class Level {
    constructor(game) {
        this.game = game
        this.setup()
    }
    static instance(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }
    setup() {
        this.numberOfLevel = 1
        this.levels = localStorage
    }
    loadDatas(numberOfLevel) {
        /*
        保存数据结构
        {
            1: [[36, 22, 1], [58, 55, 1]],
            2: [[36, 22, 1], [58, 55, 1]],
        }
        */
        var game = this.game
        var n = numberOfLevel
        var self = this
        var level = JSON.parse(self.levels[n])
        var blocks = []

        for (var i = 0; i < level.length; i++) {
            var p = level[i]
            var b = Block.new(game, p)
            blocks.push(b)
        }
        return blocks
    }
    saveDatas(numberOfLevel, blocks) {
        var self = this
        var level = []
        for (var i = 0; i < blocks.length; i++) {
            var b = blocks[i]
            var p = [b.x, b.y, b.lifes]
            level.push(p)
        }

        self.levels[numberOfLevel] = JSON.stringify(level)
    }
}
