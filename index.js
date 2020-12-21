// Code your solution here

function findMatching(array, string) {
    return array.filter(d => {
        return d.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(array, string) {
    return array.filter(closeMatch => {
        return closeMatch.startsWith(string)
    })
}

function matchName(array, string) {
    return array.filter(d => {
        return d.name === string
    })
}