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


    for (let x = 0; x < 12; x = x + 1) {
        copy(graphic, 0, 0, 600, 600, x * 50, 0, 50, 600)
    }
}