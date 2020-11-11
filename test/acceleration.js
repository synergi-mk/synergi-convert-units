var convert = require('../lib'),
  assert = require('assert'),
  tests = {};

tests['g to m/s2'] = function () {
  assert.strictEqual(convert(1).from('g-force').to('m/s²'), 9.80665);
};

tests['m/s² to g'] = function () {
  assert.strictEqual(convert(9.80665).from('m/s²').to('g-force'), 1);
};

module.exports = tests;
