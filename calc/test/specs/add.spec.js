const Calculator = require("../../app/calc.js");
const chai = require("chai");
const { expect } = require("chai");
const { describe } = require("mocha");
const spies = require("chai-spies");
chai.use(spies);

describe("add scenarios", function () {
  let calculator;
  let spy;
  this.beforeEach(function () {
    calculator = new Calculator();
    spy = chai.spy.on(calculator, "add");
  });
  it("should return sum of numbers", function () {
    expect(calculator.add(2, 4)).to.be.equal(6);
  });
  it("should throw an error if first agument is not of type 'Number'", function () {
    let callWithErrorTypeOf = calculator.add(true, 13);
    expect(spy).to.be.a.spy;
    expect(callWithErrorTypeOf).to.throw(
      `Cannot run the task as at leasts one of the arguments is not of type "Number"`
    );
  });
  it("should throw an error if second agument is not of type 'Number'", function () {
    let callWithErrorTypeOf = calculator.add(1, false);
    expect(spy).to.be.a.spy;
    expect(callWithErrorTypeOf).to.throw(
      `Cannot run the task as at leasts one of the arguments is not of type "Number"`
    );
  });
});
