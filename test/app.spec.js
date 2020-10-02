const assert = require("chai").assert;
const app = require("../src/app");

describe("the add function", () => {
  it("adding function and is equal to 10", () => {
    assert.equal(app.add(5, 5), 10);
  });
  it("is add function returnig number or not", () => {
    assert.typeOf(app.add(2, 2), "number");
  });
});
