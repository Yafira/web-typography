let font
let graphic

function preload() {
    font = loadFont("assets/spacegrotesk-medium.otf")
}

function setup() {
    createCanvas(500, 500);


    graphic = createGraphics(500, 500)


    graphic.fill("#e21fb1")
    graphic.textFont(font)
    graphic.textSize(400)
    graphic.textAlign(CENTER, CENTER)
    graphic.text("01", width / 2, height / 2)
}

function draw() {
    background("#fbfcc0")

    copy(graphic, 0, 0, 500, 500, 0, 0, frameCount, 500)
    copy(graphic, 0, 0, 500, 500, frameCount, 0, 500 - frameCount, 500)
} 