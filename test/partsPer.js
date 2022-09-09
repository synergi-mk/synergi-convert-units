var convert = require('../lib'),
  assert = require('assert'),
  tests = {};

tests['ppm to ppm'] = function () {
  assert.strictEqual(convert(1).from('ppmm').to('ppmm'), 1);
};

tests['ppb to ppb'] = function () {
  assert.strictEqual(convert(1).from('ppbb').to('ppbb'), 1);
};

tests['ppm to ppb'] = function () {
  assert.strictEqual(convert(1).from('ppmm').to('ppbb'), 1000);
};

tests['ppb to ppm'] = function () {
  assert.strictEqual(convert(1).from('ppbb').to('ppmm'), 0.001);
};

tests['ppt to ppt'] = function () {
  assert.strictEqual(convert(1).from('ppt').to('ppt'), 1);
};

tests['ppm to ppt'] = function () {
  assert.strictEqual(convert(1).from('ppmm').to('ppt'), 1000000);
};

tests['ppt to ppb'] = function () {
  assert.strictEqual(convert(1).from('ppt').to('ppbb'), 0.001);
};

tests['ppt to ppm'] = function () {
  assert.strictEqual(convert(1).from('ppt').to('ppmm'), 0.000001);
};

tests['ppq to ppq'] = function () {
  assert.strictEqual(convert(1).from('ppq').to('ppq'), 1);
};

tests['ppq to ppt'] = function () {
  assert.strictEqual(convert(1).from('ppq').to('ppt'), 0.001);
};

tests['ppq to ppm'] = function () {
  assert.strictEqual(convert(1).from('ppq').to('ppmm'), 0.000000001);
};

module.exports = tests;
