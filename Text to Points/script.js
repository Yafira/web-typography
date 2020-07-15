let font
let points

function preload() {
    font = loadFont("assets/inconsolata-bold.ttf")
}


function setup() {
    createCanvas(1200, 600)


    points = font.textToPoints("Hello World!", 130, 330, 180, {
        sampleFactor: 0.1, // ratio of path-length to number of samples, higher values yield more points
        simplifyThreshold: 0
    })
}


function draw() {
    background("#eef3d7")

    fill("#b617ff")
    noStroke()


    points.forEach(point => {
        const distortion = createVector(mouseX, mouseY)


        circle(point.x + distortion.x, point.y + distortion.y, 5)
    })


    noFill()
    stroke("#000000")

    beginShape()

    points.forEach(point => {
        vertex(point.x, point.y)
    })
    endShape()


}