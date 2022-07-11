const multiply = require("../../app/calc.js");
const chai = require("chai");
const { expect } = require("chai");
const { describe } = require("mocha");
const spies = require("chai-spies");
chai.use(spies);

describe("multiply scenarios", function () {
  let calculator, spy;
  this.beforeEach(function () {
    calculator = new multiply();
    spy = chai.spy.on(calculator, "multiply");
  });
  this.afterEach(function () {
    calculator = null;
  });
  it("should return product of numbers", function () {
    expect(calculator.multiply(4, 3)).to.be.equal(12);
  });
  it("should throw an error if first agument is not of type 'Number'", function () {
    let callWithErrorTypeOf = calculator.multiply(true, 12);
    expect(spy).to.be.a.spy;
    expect(callWithErrorTypeOf).to.throw(
      `Cannot count the product as the first arguments is not of type "Number"`
    );
  });
  it("should throw an error if second agument is not of type 'Number'", function () {
    let callWithErrorTypeOf = calculator.multiply(10, false);
    expect(spy).to.be.a.spy;
    expect(callWithErrorTypeOf).to.throw(
      `Cannot count the product as the second arguments is not of type "Number"`
    );
  });
});
