const headerTags = document.querySelectorAll("h1, h2")

const runRandom = tag => {
    const originalContent = tag.innerHTML
    let newContent = ""
    let num = 0

    const addInterval = setInterval(() => {
        num = num + 1
        newContent = originalContent.substring(0, num)

        if (originalContent == tag.innerHTML) {
            clearInterval(addInterval)
        }
    }, 100)

    const randomInterval = setInterval(() => {
        tag.innerHTML = newContent

        for (let i = newContent.length; i < originalContent.length; i = i + 1) {
            tag.innerHTML = tag.innerHTML + "."
        }

    }, 50)


}

headerTags.forEach(tag => {
    runRandom(tag)
})