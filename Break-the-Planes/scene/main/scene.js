class Scene extends LuoScene {
    constructor(game) {
        super(game)
        this.setup()

    }
    setup() {
        var game = this.game
        this.numberOfEnemies = 30
        this.bg = LuoImage.new(game, 'background')
        this.player = Player.new(game)
        this.player.x = 100
        this.player.y = 200

        this.playerBullets = []
        this.enemyBullets = []

        this.addElement(this.bg)
        this.addElement(this.player)
        this.addEnemies()
        this.setupInputs()
    }

    addEnemies() {
        var es = []
        for (var i = 0; i < this.numberOfEnemies; i++) {
            var e = Enemy.new(this.game)
            es.push(e)
            this.addElement(e)
        }
        this.enemies = es
    }

    // removeDeadEnemies() {
    //     var es = []
    //     for (var e of this.enemies) {
    //         if (e.live) {
    //             es.push(e)
    //         } else {
    //             e.kill()
    //         }
    //     }
    //     this.enemies = es
    // }
    // removeDeadPlayerBullets(name) {
    //     var bs = []
    //     for (var b of this.playerBullets) {
    //         if (b.live) {
    //             bs.push(b)
    //         } else {
    //             b.kill()
    //         }
    //     }
    //     this.playerBullets = bs
    // }
    // removeDeadEnemyBullets() {
    //     var bs = []
    //     for (var b of this.enemyBullets) {
    //         if (b.live) {
    //             bs.push(b)
    //         } else {
    //             b.kill()
    //         }
    //     }
    //     this.enemyBullets = bs
    // }
    removeDead(parts) {
        for (var p of parts) {
            if (!p.live) {
                p.kill()
                removeArgfromList(p, parts)
            }
        }
    }

    processCollision(parts1, parts2) {
        for (var a of parts1) {
            for (var b of parts2) {
                if (a.collide(b)) {
                    // 添加爆炸效果
                    this.addParticleSystem(a)
                    a.die()
                    b.die()
                }
            }
        }
    }

    addParticleSystem(img) {
        var x = img.x + img.w / 2
        var y = img.y + img.h / 2
        var ps = LuoParticleSystem.new(this.game, x, y)
        this.addElement(ps)
    }

    setupInputs() {
        var g = this.game
        var s = this
        g.registerAction('ArrowLeft', function(){
            s.player.moveLeft()
        })
        g.registerAction('ArrowRight', function(){
            s.player.moveRight()
        })
        g.registerAction('ArrowUp', function(){
            s.player.moveUp()
        })
        g.registerAction('ArrowDown', function(){
            s.player.moveDown()
        })
        g.registerAction(' ', function(){
            s.player.fire()
        })
    }

    removeDeadParts() {
        var s = this
        s.removeDead(s.playerBullets)
        s.removeDead(s.enemyBullets)
        s.removeDead(s.enemies)
    }

    checkCollision() {
        var s = this
        s.processCollision(s.enemies, s.playerBullets)
        s.processCollision(s.playerBullets, s.enemyBullets)
    }

    update() {
        super.update()

        var s = this
        s.checkCollision()
        s.removeDeadParts()
        // s.removeDeadPlayerBullets()
        // s.removeDeadEnemyBullets()
        // s.removeDeadEnemies()
    }

    draw() {
        super.draw()
    }
}
