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
    const nl = 0.01
    // nl = noise level

    background("#eef3d7")

    fill("#b617ff")
    noStroke()


    points.forEach(point => {
        const distance = createVector(point.x - mouseX, point.y - mouseY)
        const distortion = distance.mult(60 / distance.mag()) 


        circle(point.x + distortion.x, point.y + distortion.y, 5)
    })


    noFill()
    stroke("#b617ff")


    beginShape()
    points.forEach(point => {
        const distance = createVector(point.x - mouseX, point.y - mouseY)
        const distortion = distance.mult(60 / distance.mag())

        const nx = 40 * noise(nl * point.x, nl * point.y, nl * frameCount) - 20
        const ny = 40 * noise(nl * point.x, nl * point.y, nl * frameCount) - 20
        // nl -> adds the speed to noise


        vertex(point.x + distortion.x + nx, point.y + distortion.y + ny)
    })
    endShape()


}