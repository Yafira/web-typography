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
    image(graphic, frameCount, 0, 1200, 600, 0, 0, 1200, 600)

}