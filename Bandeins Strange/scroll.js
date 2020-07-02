// pick the h1 tag 
const h1 = document.querySelector("h1")



// and when the user scrolls calculate how big the font size should be
window.addEventListener("scroll", function () {
    const pixels = window.pageYOffset


    const fontSize = pixels * 0.2 + 12


    // font-size -> fontSize
    // font-variation-settings -> fontVariationSettings
    h1.style.fontSize = fontSize + "px"
})