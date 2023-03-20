// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(drivers, value) {
  return drivers.filter(driver =>
    driver.toLowerCase().startsWith(value.toLowerCase())
  );
}
function fuzzyMatch(drivers, value){
return drivers.filter(driver =>
  driver.toLowerCase().startsWith(value.toLowerCase())
  );
}
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}
