const { expect } = require('chai');
const { alwaysArray, splitOrArray } = require('../../../lib/util/object');

describe('util/object', function () {
  describe('alwaysArray()', function () {
    it('should return an item in an array if passed a non-array', function () {
      expect(alwaysArray(77)).to.eql([77]);
    });

    it('should return the same value if passed an array', function () {
      expect(alwaysArray([77])).to.eql([77]);
    });
  });

  describe('splitOrArray()', function () {
    it('should split a string by commas in the default case', function () {
      expect(splitOrArray('red,green,blue')).to.eql(['red', 'green', 'blue']);
    });

    it('should split by the delimeter if specified', function () {
      expect(splitOrArray('red/green/blue', '/')).to.eql(['red', 'green', 'blue']);
    });

    it('should just return an array if passed an array instead of a string', function () {
      expect(splitOrArray(['red', 'green', 'blue'])).to.eql(['red', 'green', 'blue']);
    });
  });
});
