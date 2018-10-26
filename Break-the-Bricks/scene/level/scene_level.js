class SceneLevel extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
    }
    setup() {
        this.originBLockArgs = [100, 400, 2]
        this.originBLock = Block.new(this.game, this.originBLockArgs)
        this.blocks = Blocks.new(this.game)
        //
        this.numberOfLevel = 1
        var text = '第' + this.numberOfLevel + '关'
        this.levelLabel = Label.new(this.game)
        this.levelLabel.init(250, 15, text, 15)
        //
        this.label = Label.new(this.game)
        this.label.init(100, 490, '按 Enter 完成一关编辑，按 k 开始游戏', 20)

        this.addElement(this.originBLock)
        this.addElement(this.blocks)
        this.addElement(this.levelLabel)
        this.addElement(this.label)

        this.setupInputs()
        this.mouseEvent()
    }
    setupInputs() {
        var game = this.game
        var self = this

        game.registerAction('Enter', function(keyStatus) {
            if (keyStatus == 'up') {
                // // 保存当前 blocks 数据
                self.blocks.save(self.numberOfLevel)
                // 清空当前 blocks 数据，进入下一关编辑
                self.blocks.clear()
                self.numberOfLevel++
            }
        })

        game.registerAction('k', function() {
            // 开始游戏
            var s = SceneMain.new(game)
            game.replaceScene(s)
        })
    }
    mouseEvent() {
        var game = this.game
        var self = this
        // mouse event
        var enableDrag = false
        var tempBlock = null
        game.canvas.addEventListener('mousedown', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            // 检查是否点中了原始的 block
            if (pointInRect(self.originBLock, x, y)) {
                enableDrag = true

                var o = self.originBLock
                var p = self.originBLockArgs
                tempBlock = Block.new(game, p)
                self.blocks.push(tempBlock)
            }

            // 检查是否点中了已有的 block
            var blocks = self.blocks.blocks
            for (var i = 0; i < blocks.length; i++) {
                var b = blocks[i]
                if (pointInRect(b, x, y)) {
                    enableDrag = true
                    tempBlock = b
                }
            }
        })
        game.canvas.addEventListener('mousemove', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            if (enableDrag) {
                tempBlock.x = x
                tempBlock.y = y
            }
        })
        game.canvas.addEventListener('mouseup', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            log(x, y, 'up')
            enableDrag = false
        })
    }
    draw() {
        super.draw()
    }
    update() {
        super.update()

        var text = '第' + this.numberOfLevel + '关'
        this.levelLabel.updateText(text)
    }
}