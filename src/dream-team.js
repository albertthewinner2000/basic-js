const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let name = "";
  for (let member of members) {
    if (typeof member === "string") {
      name += member.trim()[0];
    }
  }
  return name.toUpperCase().sort();
};

// function createDreamTeam(members) {
//   if (!Array.isArray(members)) return false;
//   let name = "";
//   for (let member of members) {
//     if (typeof member === "string") {
//       name += member.trim()[0];
//     }
//   }
//   return name.toUpperCase();
// }

// console.log(createDreamTeam(["Ameli", "July", "Megan"]));
