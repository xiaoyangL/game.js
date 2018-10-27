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
        bird1: 'img/bird1.png',
        bird2: 'img/bird2.png',
        bird3: 'img/bird3.png',
        startTitle: 'img/startTitle.png',
        endTitle: 'img/endTitle.png',
        bg: 'img/bg.png',
        ground: 'img/ground.png',
        pipe: 'img/pipe.png',
    }
    var game = LuoGame.instance(30, images, function(g) {
        // var s = SceneMain.new(g)
        // g.runWithScene(s)
        var s = SceneTitle.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)
}

__main()