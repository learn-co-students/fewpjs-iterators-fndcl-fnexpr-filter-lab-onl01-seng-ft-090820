// Code your solution here

function findMatching(drivers, string) {
    let matching = drivers.filter( x => {
        return x.toLowerCase() === string.toLowerCase()
    })
    if (!!matching === true) {
        return matching
    }
}

// let even = arr.filter(n => {
//     return n % 2 === 0;
//   });
  // even = [2,4,6]

function fuzzyMatch(drivers, string) {
    let similar = drivers.filter( x => {
        return x.toLowerCase()[0] === string.toLowerCase()[0]
    })
    if (!!similar === true) {
        return similar
    }
}

function matchName(drivers, string) {
    let match = drivers.filter( x => { 
        return x.name === string
    })
    if (!!match == true) {
      return match
    }
}