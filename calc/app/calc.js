//A simple class containing methods for calculate numbers
class Сalculator {
  //Creates an instance of calculator.

  constructor() {}

  validateParameters(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error(
        `Cannot run the task as at leasts one of the arguments is not of type "Number"`
      );
    }
  }

  /*@param {Number} a
   *@param {Number} b
   *@return {Number} sum of 2 numbers
   *@memberof Calculator
   */
  add(a, b) {
    this.validateParameters(a, b);
    return a + b;
  }

  /*@param {Number} a
   *@param {Number} b
   *@return {Number} product of arguments
   *@memberof calculator
   */
  multiply(a, b) {
    this.validateParameters(a, b);
    return a * b;
  }
}

module.exports = Сalculator;
