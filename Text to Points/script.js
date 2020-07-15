let font
 

function preload() {
    font = loadFont("assets/inconsolata-bold.ttf")
}


function setup() {
    createCanvas(1200, 600)
}


function draw() {
    background("#eef3d7")
    text("Hello World!", 100, 100)
}