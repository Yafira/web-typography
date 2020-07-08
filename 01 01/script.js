let font
let graphic
// variation B: 01 23
let graphic2

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


    graphic2 = createGraphics(500, 500)


    graphic2.fill("#e21fb1")
    graphic2.textFont(font)
    graphic2.textSize(400)
    graphic2.textAlign(CENTER, CENTER)
    graphic2.text("23", width / 2, height / 2)

}

function draw() {
    background("#fbfcc0")

    let val = sin(frameCount * 0.05) * 250

    copy(graphic, 0, 0, 250 + val, 500, 0, 0, 250 + val, 500)
    copy(graphic2, 250 + val, 0, 250 - val, 500, 250 + val, 0, 250 - val, 500)
}