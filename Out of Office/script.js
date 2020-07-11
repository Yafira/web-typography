let font
let graphic

function preload() {
    font = loadFont("assets/spacegrotesk-medium.otf")
}


function setup() {
    createCanvas(1200, 600)

    graphic = createGraphics(1200, 600)

    graphic.textFont(font)
    graphic.fill("#ffffff")
    graphic.textSize(500)
    graphic.textAlign(CENTER, CENTER)
    graphic.text("oas", 600, 300)
}


function draw() {
    background("#000000")

    
    const tileSize = 50

    for (let y = 0; y < 0; y = y + 1) {

        // source
        const sx = 0
        const sy = 0
        const sw = 1200
        const sh = 600

        // destination 
        const dx = 0
        const dy = y * tileSize
        const dw = 1200
        const dh = tileSize



        image(graphic, dx, dy, dw, dh, sx, sy, sw, sh)
    }




}

