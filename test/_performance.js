var convert = require('../lib'),
  assert = require('assert'),
  tests = {},
  ACCURACY = 1 / 1000,
  percentError = require('../lib/percentError');

tests['Converter.getUnit()'] = function () {
  const start = Date.now();
  for (let i = 0; i < 10000000; i++) {
    convert(1).getUnit('oz');
  }
  const time = Date.now() - start;
  console.log('time:', time);
  assert(time < 300);
};

tests['Converter().from().to()'] = function () {
  const start = Date.now();
  for (let i = 0; i < 10000000; i++) {
    convert(1).from('oz').to('g');
  }
  const time = Date.now() - start;
  console.log('time:', time);
  assert(time < 300);
};

module.exports = tests;
