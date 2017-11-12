// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase();
  })
}

const drivers = ['Bobby Smith', 'Sammy Watkins', 'Sally Jenkins', 'Annette Sawyer', 'Sarah Hucklebee', 'bobby ridge'];

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
     let fullName = driver.split(' ')
    return Object.assign({}, driver, {firstName: fullName[0] , lastName: fullName[1] });
  })
}

nameToAttributes(drivers);
