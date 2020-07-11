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
    image(graphic, 0, 0, 1200, 600, 0, 0, 1200, 600)
}

