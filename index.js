// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase();
  })
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    let fName = driver.split(' ')[0];
    let lName = driver.split(' ')[1];
    return {firstName: fName, lastName: lName};
  })
}


