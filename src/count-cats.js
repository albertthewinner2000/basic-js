const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let total = 0;
  for (let nestedArray of backyard) {
    for (let element of nestedArray){
      if (element === '^^'){
        total++
      }
    }
  }
  return total;
};

