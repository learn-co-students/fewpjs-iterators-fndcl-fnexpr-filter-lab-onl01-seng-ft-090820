// Code your solution here

function findMatching(array, string) {
     return array.filter(n => {
         return n.toLowerCase() === string.toLowerCase()
     })

}

function fuzzyMatch(array, str) { 
    return array.filter( driverMatch => { 
        return driverMatch.startsWith(str)
    })
}


function matchName(array, string) {
    let matchingElement = array.filter(object => {
        return object.name === string})
    return matchingElement



}