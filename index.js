// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(drivers, str) {
  let matching=drivers.filter(driver=>driver.toUpperCase()===str.toUpperCase())
  return matching 
}
function fuzzyMatch(drivers, str){
  let matching = drivers.filter(driver=>driver.startsWith(str))
return matching
}
function matchName(drivers, str) {
  return drivers.filter(driver => driver.name === str);
}
