// Code your solution here
const findMatching = (drivers, names) => drivers.filter(driver =>driver.toLowerCase() === names.toLowerCase())
    


const fuzzyMatch = (drivers, string) => drivers.filter(driver => driver.slice(0, string.length) === string)
        


const matchName = (drivers, string) => drivers.filter(driver => driver.name === string)
    
