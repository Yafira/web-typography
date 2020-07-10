let font
let graphic

function preload () {
    font = loadFont("assets/spacegrotesk-medium.otf")
}


function setup() {
    createCanvas(1200, 600)

    graphic = createGraphics(1200, 600)

    graphic.fill("#ff0000")
    graphic.textSize(300)
    graphic.textAlign(CENTER, CENTER)
    graphic.textFont(font)
    graphic.textLeading(200)
    graphic.text("Good\nMorning", 600, 300)
}

function draw() {
    background("#ebe2d8")

    
    const tileSize = 100


    for (let x = 0; x < 12; x = x + 1) {
        for (let y = 0; y < 6; y = y + 1) {

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

        }
    }



    }