class SceneLevel extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
    }
    setup() {

        this.blocks = Blocks.new(this.game)
        //
        this.numberOfLevel = 1
        var text = '第' + this.numberOfLevel + '关'
        this.levelLabel = Label.new(this.game)
        this.levelLabel.init(250, 15, text, 15)
        //
        this.label = Label.new(this.game)
        this.label.init(100, 490, '按 Enter 完成一关编辑，按 k 开始游戏', 20)

        this.addElement(this.blocks)
        this.addElement(this.levelLabel)
        this.addElement(this.label)

        this.setupInputs()
        this.mouseEvent()
    }
    drawGrid(color, stepx, stepy) {
        var context = this.game.context
        var width = context.canvas.width
        var height = context.canvas.height

        context.save()
        context.strokeStyle = color
        context.lineWidth = 0.5
        context.clearRect(0, 0, width, height)

        for (var i = stepx + 0.5; i < width; i += stepx) {
            context.beginPath()
            context.moveTo(i, 0)
            context.lineTo(i, height)
            context.stroke()
        }

        for (var i = stepy + 0.5; i < height; i += stepy) {
            context.beginPath()
            context.moveTo(0, i)
            context.lineTo(width, i)
            context.stroke()
        }

        context.restore()
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
        var exist = false
        // mouse event
        game.canvas.addEventListener('mousedown', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            // 应该检查 block 是否已存在，再添加
            var block_x = x - (x % 50)
            var block_y = y - (y % 20)
            var blockArgs = [block_x, block_y, 2]
            var block = Block.new(game, blockArgs)
            self.blocks.push(block)
        })

    }
    draw() {
        this.drawGrid('#ccc', 50, 20)
        super.draw()
    }
    update() {
        super.update()

        var text = '第' + this.numberOfLevel + '关'
        this.levelLabel.updateText(text)
    }
}