// Code your solution here

function findMatching(array, string) { 
    return array.filter(n =>  {
        return n.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(array, str) { 
    return array.filter( possibleMatch => { 
        return possibleMatch.startsWith(str)
    })
}

function matchName(array, str) { 
    let matchingElement = array.filter(object => {
        return object.name === str})
    return matchingElement
}

