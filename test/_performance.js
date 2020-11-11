var convert = require('../lib'),
  assert = require('assert'),
  tests = {},
  ACCURACY = 1 / 1000,
  percentError = require('../lib/percentError'),
  each = require('lodash.foreach');

tests['Converter.possibilityOld() vs Converter.possibility()'] = function () {
  var allUnits = convert().possibilities();
  each(allUnits, function (unit) {
    var expectedMetric = convert(1).from(unit).possibility('metric');
    var actualMetric = convert(1).from(unit).possibilityOld('metric');
    var expectedImperial = convert(1).from(unit).possibility('imperial');
    var actualImperial = convert(1).from(unit).possibilityOld('imperial');
    try {
      assert.deepEqual(actualMetric.sort(), expectedMetric.sort());
      assert.deepEqual(actualImperial.sort(), expectedImperial.sort());
    } catch (e) {
      process.stderr.write('error in ' + unit + '\n');
      throw e;
    }
  });
};
tests['Converter.possibilityOld()'] = function () {
  const start = Date.now();
  for (let i = 0; i < 10000000; i++) {
    convert(1).from('oz').possibilityOld('zemr');
  }
  const time = Date.now() - start;

  console.log('time:', time);
  assert(time < 1000);
};
tests['Converter.possibility()'] = function () {
  const start = Date.now();
  for (let i = 0; i < 10000000; i++) {
    convert(1).from('oz').possibility('zemr');
  }
  const time = Date.now() - start;

  console.log('time:', time);
  assert(time < 1000);
};
tests['Converter.singleSystem()'] = function () {
  const start = Date.now();
  for (let i = 0; i < 10000000; i++) {
    convert(1).singleSystem('oz');
  }
  const time = Date.now() - start;
  console.log('time:', time);
  assert(time < 300);
};

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
  assert(time < 400);
};

module.exports = tests;
