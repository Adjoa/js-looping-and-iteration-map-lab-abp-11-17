// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase();
  })
}



const drivers = ['Bobby Smith', 'Sammy Watkins', 'Sally Jenkins', 'Annette Sawyer', 'Sarah Hucklebee', 'bobby ridge'];
// try: new substring at ' '
function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    //name "Bobby Smith"
    let fName = driver.split(' ')[0];
    let lName = driver.split(' ')[1];
    return {firstName: fName, lastName: lName};
    //return Object.assign({}, driver, { firstName: driver.toLowerCase(), lastName: driver.toLowerCase });
    // {firstName: "Bobby", lastName: "Smith"}
  })
}

nameToAttributes(drivers);
