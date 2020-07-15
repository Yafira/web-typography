const headerTags = document.querySelectorAll("h1, h2")

const runRandom = tag => {
    tag.innerHTML = "Downtown Toronto"
}

headerTags.forEach(tag => {
    tag.innerHTML = "Downtown Brooklyn"
})