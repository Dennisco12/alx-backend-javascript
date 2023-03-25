const expect = require("chai").expect;
const { it, describe } = require("mocha");
const calculateNumber = require("./1-calcul");

describe("calculateNumber()", function() {
  describe("SUM", function() {
    it(`checking if numbers round`, function() {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });
    it(`checking if numbers round`, function() {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });
    it(`checking if numbers round`, function() {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });
    it(`checking if numbers round`, function() {
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });
  });

  describe("SUBTRACT", function() {
    it('checking for subtraction', function() {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });
    it('checking for subtraction', function() {
      expect(calculateNumber('SUBTRACT', 6.4, 1.8)).to.equal(4);
    });
    it('checking for subtraction', function() {
      expect(calculateNumber('SUBTRACT', 9.9, -5.1)).to.equal(15);
    });
  });

  describe('DIVIDE', function() {
    it('checking for divide', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
    it('checking for divide', function() {
      expect(calculateNumber('DIVIDE', 2.4, 0)).to.equal('Error');
    });
  });
});
