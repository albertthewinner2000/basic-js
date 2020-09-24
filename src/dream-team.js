const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let name = [];
  for (let member of members) {
    if (typeof member === "string") {
      name.push(member.trim()[0].toUpperCase());
    }
  }
  return name.sort().join("").toUpperCase();
}

function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let name = [];
  for (let member of members) {
    if (typeof member === "string") {
      name.push(member.trim()[0].toUpperCase());
    }
  }
  return name.sort().join("");
}

console.log(createDreamTeam([
  ['David Abram'],
  ['Robin Attfield'],
  'Thomas Berry',
  ['Paul R.Ehrlich'],
  'donna Haraway',
  ' BrIaN_gOodWiN  ',
  {
    0: 'Serenella Iovino'
  },
  'Erazim Kohak',
  '  val_plumwood',
]))

