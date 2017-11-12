// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase();
  })
}

//const drivers = ['Bobby Smith', 'Sammy Watkins', 'Sally Jenkins', 'Annette Sawyer', 'Sarah Hucklebee', 'bobby ridge'];

function nameToAttributes(drivers) {
  drivers.forEach(
    function(driver) {
      return Object.assign({}, driver, {firstName: driver[0] , lastName: driver[1] });
    }
  );
  //return drivers.map(function(driver) {
  //  return Object.assign({}, driver, {firstName: driver[0] , lastName: driver[1] });
  //})
}

//nameToAttributes(drivers);
