const e = sel => document.querySelector(sel)

const log = console.log.bind(console)

const imageFromPath = function(path) {
    var img = new Image()
    img.src = path
    return img
}

const aInb = function(x, x1, x2) {
    return x >= x1 && x <= x2
}

const rectIntersects = function(a, b) {
    if (aInb(a.x, b.x, b.x + b.w) || aInb(b.x, a.x, a.x + a.w)) {
        if (aInb(a.y, b.y, b.y + b.h) || aInb(b.y, a.y, a.y + a.h)) {
            return true
        }
    }
    return false
}

const pointInRect = function(rect, x, y) {
    var o = rect
    var xIn = (x >= o.x) && (x <= o.x + o.w)
    var yIn = (y >= o.y) && y <= (o.y + o.h)
    return xIn && yIn
}

const randomBetween = function(start, end) {
    var n = Math.random() * (end - start + 1)
    return Math.floor(n + start)
}
