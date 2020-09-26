const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(diskNumber, turnsSpeed) {
  const turns = 2 ** diskNumber - 1,
    seconds = Math.floor((3600 / turnsSpeed) * turns);
  return { turns, seconds };
}




