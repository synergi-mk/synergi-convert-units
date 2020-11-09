var convert = require('../lib'),
  assert = require('assert'),
  tests = {},
  ACCURACY = 1 / 1000,
  percentError = require('../lib/percentError');

tests['ft² to ft²'] = function () {
  assert.strictEqual(convert(1).from('ft²').to('ft²'), 1);
};

tests['ft² to in²'] = function () {
  assert.strictEqual(convert(1).from('ft²').to('in²'), 144);
};

tests['in² to ft²'] = function () {
  assert.strictEqual(convert(1).from('in²').to('ft²'), 1 / 144);
};

tests['ft² to ac'] = function () {
  assert.strictEqual(convert(1).from('ft²').to('ac'), 1 / 43560);
};

tests['ac to ft²'] = function () {
  assert.strictEqual(convert(1).from('ac').to('ft²'), 43560);
};

tests['ft² to mi²'] = function () {
  assert.strictEqual(convert(1).from('ft²').to('mi²'), 1 / 27878400);
};

tests['mi² to ft²'] = function () {
  assert.strictEqual(convert(1).from('mi²').to('ft²'), 27878400);
};

tests['m² to m²'] = function () {
  assert.strictEqual(convert(1).from('m²').to('m²'), 1);
};

tests['m² to cm²'] = function () {
  assert.strictEqual(convert(1).from('m²').to('cm²'), 10000);
};

tests['cm² to m²'] = function () {
  assert.strictEqual(convert(1).from('cm²').to('m²'), 1 / 10000);
};

tests['m² to mm²'] = function () {
  assert.strictEqual(convert(1).from('m²').to('mm²'), 1000000);
};

tests['ha to m²'] = function () {
  assert.strictEqual(convert(1).from('ha').to('m²'), 10000);
};

tests['km² to m²'] = function () {
  assert.strictEqual(convert(1).from('km²').to('m²'), 1000000);
};

// When converting between systems, expect < 0.1% error
tests['m² to ft²'] = function () {
  var expected = 10.7639,
    actual = convert(1).from('m²').to('ft²');
  assert.ok(percentError(expected, actual) < ACCURACY, 'Expected: ' + expected + ', Actual: ' + actual);
};

tests['mm² to ft²'] = function () {
  var expected = 1.07639e-5,
    actual = convert(1).from('mm²').to('ft²');
  assert.ok(percentError(expected, actual) < ACCURACY, 'Expected: ' + expected + ', Actual: ' + actual);
};

module.exports = tests;
