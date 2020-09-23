const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let t =
    Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD);
    return t;
};

function dateSample(sampleActivity) {
  if (isNaN(Number(sampleActivity))|| sampleActivity === undefined) {
    return false 
  }
  let t =
    Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD);
    return Math.ceil(t);
};

console.log(dateSample())
// console.log()


