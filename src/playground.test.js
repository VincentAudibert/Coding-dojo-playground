// for documentation : https://mochajs.org/

// example :
const assert = require("assert"); //pure mocha

// for general documentation : https://www.chaijs.com/guide/styles/
// for API description : https://www.chaijs.com/api/bdd/
const expect = require("chai").expect;

describe("test example", () => {
  describe("nested example", () => {
    it("should pass as dummie test", () => {
      assert.equal(true, true); //mocha base syncax, assert relying on node
      expect(true).to.equals(true); //chai expect base syntax
      expect({ a: 1 }).to.not.have.property("b");
      expect(null).to.be.a("null");
    });
  });
});
