var convert = require('../lib');
var assert = require('assert');

const start = Date.now();
for (let i = 0; i < 10000000; i++) {
  const z = convert(1).from('oz').to('g');
}
console.log(Date.now() - start);
