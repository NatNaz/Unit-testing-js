//A simple class containing methods for calculate numbers
class calculator {
  //Creates an instance of calculator.

  constructor() {}

  /*@param {Number} a
   *@param {Number} b
   *@return {Number} sum of 2 numbers
   *@memberof calculator
   */
  add(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error(
        `Cannot count the sum as at leats one of the arguments is not of type "Number"`
      );
    } else {
      let sum = a + b;
      return sum;
    }
  }

  /*@param {Number} a
   *@param {Number} b
   *@return {Number} product of arguments
   *@memberof calculator
   */
  multiply(a, b) {
    if (typeof a !== "number") {
      throw new Error(
        `Cannot count the product as the first arguments is not of type "Number"`
      );
    } else if (typeof b !== "number") {
      throw new Error(
        `Cannot count the product as the second arguments is not of type "Number"`
      );
    } else {
      let product = a * b;
      return product;
    }
  }
}

module.exports = calculator;
