class LuoScene {
    constructor(game) {
        this.game = game
        this.elements = []
        this.active = false
    }
    static new(game) {
        var i = new this(game)
        return i
    }

    addElement(img) {
        // img 是 LuoImage 类型
        img.scene = this
        this.elements.push(img)
    }
    removeElement(img) {
        // img 是 LuoImage 类型
        var p = this.elements.indexOf(img)
        this.elements.splice(p, 1)
    }
    draw() {
        for (var e of this.elements) {
            e.draw()
        }
    }
    update() {
        for (var e of this.elements) {
            e.update()
        }
    }
}