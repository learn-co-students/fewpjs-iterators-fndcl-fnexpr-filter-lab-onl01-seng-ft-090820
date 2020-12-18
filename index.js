function findMatching(drivers, name) {
    let matches = drivers.filter(driver => {return driver.toLowerCase() === name.toLowerCase()})
    return matches
}

function fuzzyMatch(drivers, string) {
    let matches = drivers.filter(driver => {
        return driver.slice(0, string.length) === string
    })
    return matches
}

function matchName(drivers, string) {
    let matches = drivers.filter(driver => {return driver.name === string})
    return matches
}