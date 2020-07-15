const headerTags = document.querySelectorAll("h1, h2")

const runRandom = tag => {
    const originalContent = tag.innerHTML


    tag.innerHTML = originalContent.substring(0, 5)
}

headerTags.forEach(tag => {
    runRandom(tag)
})