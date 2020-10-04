const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(array) {
    if (!Array.isArray(array)) return 0
    return 1 + array.reduce((arr, cur) => Math.max(this.calculateDepth(cur), arr), 0)
  }
}