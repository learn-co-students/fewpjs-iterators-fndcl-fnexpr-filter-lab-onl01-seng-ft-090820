// Code your solution here
const findMatching = (drivers, names) => {
    let match = drivers.filter(driver => {
        return driver.toLowerCase() === names.toLowerCase()})
        return match
    }


const fuzzyMatch = (drivers, string) => {
    let match = drivers.filter(driver => {
        return driver.slice(0, string.length) === string
        })
    return match
}

const matchName = (drivers, string) => {
    let match = drivers.filter(driver => {
        return driver.name === string 
    })
    return match
}