let font
let graphic

function preload () {
    font = loadFont("assets/spacegrotesk-medium.otf")
}


function setup() {
    createCanvas(600, 600)

    graphic = createGraphics(600, 600)

    graphic.fill("#ac90ec")
    graphic.textFont(font)
    graphic.textSize(800)
    graphic.textAlign(CENTER, CENTER)
    graphic.text("a", 300, 240)
}

function draw() {
    const tileSize = 50

    for (let x = 0; x < 12; x = x + 1) {
        for (let y = 0; y < 12; y = y + 1) {
            // source 
            const sx = x * tileSize
            const sy = y * tileSize
            const sw = tileSize
            const sh = tileSize

            // destination
            const dx = x * tileSize
            const dy = y * tileSize
            const dw = tileSize
            const dh = tileSize

            image(graphic, dx, dy, dw, dh, sx, sy, sw, sh)
            // copy = (source, destination)
            // image = (destination, source)
        }     
    }
}