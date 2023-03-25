const assert = require("assert")
const { it, describe } = require("mocha");
const calculateNumber = require("./1-calcul");

describe("calculateNumber()", function() {

    it(`checking if numbers round`, function() {
      const res = calculateNumber('SUM', 1, 3);
      assert.strictEqual(res, 4);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber('SUM', 1, 3.7);
      assert.strictEqual(res, 5);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber('SUM', 1.2, 3.7);
      assert.strictEqual(res, 5);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber('SUM', 1.5, 3.7);
      assert.strictEqual(res, 6);
    });

    it('checking for subtraction', function() {
      const res = calculateNumber('SUBTRACT', 1, 3);
      assert.strictEqual(res, -2);
    });
    it('checking for subtraction', function() {
      const res = calculateNumber('SUBTRACT', 6.4, 1.8);
      assert.strictEqual(res, 4);
    });
    it('checking for subtraction', function() {
      const res = calculateNumber('SUBTRACT', 9.9, -5.1);
      assert.strictEqual(res, 15);
    });

    it('checking for divide', function() {
      const res = calculateNumber('DIVIDE', 1.4, 4.5);
      assert.strictEqual(res, 0.2);
    });
    it('checking for divide', function() {
      const res = calculateNumber('DIVIDE', 2.4, 0);
      assert.strictEqual(res, 'Error');
    });
});
