const headerTags = document.querySelectorAll("h1, h2")

const runRandom = tag => {
    const originalContent = tag.innerHTML

    let num = 0

    const addInterval = setInterval(() => {
        num = num + 1
        tag.innerHTML = originalContent.substring(0, num)

        if (originalContent == tag.innerHTML) {
            clearInterval(addInterval)
        }

    }, 100)


}

headerTags.forEach(tag => {
    runRandom(tag)
})