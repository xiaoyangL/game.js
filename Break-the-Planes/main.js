var enableDebugMode = function(game, enable) {
    window.addEventListener('keydown', function(event) {
        if (event.key == 'p') {
            window.paused = !window.paused
        }
    })
    // 控制速度
    document.querySelector('#id-input-speed').addEventListener('input', function(event) {
        var input = event.target
        // log(event, input.value)
        window.fps = Number(input.value)
    })
}

var __main = function() {
    var images = {
        background: 'img/background.png',
        player: 'img/player.png',
        bullet1: 'img/bullet1.png',
        bullet2: 'img/bullet2.png',

        enemy1: 'img/enemy1.png',
        enemy2: 'img/enemy2.png',
        enemy3: 'img/enemy3.png',

        fire: 'img/fire.png',
    }
    var game = LuoGame.instance(30, images, function(g) {
        var s = Scene.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)
}

__main()