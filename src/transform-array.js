const CustomError = require("../extensions/custom-error");

const transform = function (arr) {
  if (!Array.isArray(arr)) throw Error;
  if (
    !(
      arr.includes("--discard-next") ||
      arr.includes("--double-next") ||
      arr.includes("--discard-prev") ||
      arr.includes("--double-prev")
    )
  ) {
    return arr;
  }
  let newArr = [...arr];
  let element = newArr[0];
  for (let index = 0; index < newArr.length; index++) {
    element = newArr[index];
    if (
      element === "--discard-next" ||
      element === "--discard-prev" ||
      element === "--double-next" ||
      element === "--double-prev"
    ) {
      //action
      switch (element) {
        case "--discard-prev":
          newArr[index - 1] = undefined;
          newArr[index] = undefined;
          break;
        case "--discard-next":
          newArr[index + 1] = undefined;
          newArr[index] = undefined;
          break;
        case "--double-prev":
          newArr[index] = newArr[index - 1];
          break;
        case "--double-next":
          newArr[index] = newArr[index + 1];
          break;
      }
    } 
  }
  return newArr.filter((value) => value !== undefined);
};

module.exports = transform;


