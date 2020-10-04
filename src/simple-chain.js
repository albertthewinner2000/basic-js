const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      Number.isNaN(position)||
      position < 0 ||
      position >= this.getLength()
    ) {
      this.chain = [];
      throw new Error();
    }

    position;
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let final = '';
    final = this.chain.map(value => `( ${value} )`).join('~~')
    this.chain = [];
    return final;
  },
};

module.exports = chainMaker;

console.log;
