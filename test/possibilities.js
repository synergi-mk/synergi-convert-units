var convert = require('../lib'),
  assert = require('assert-diff'),
  tests = {};

assert.options.strict = true;

tests['l possibilities'] = function () {
  var actual = convert().from('l').possibilities(),
    expected = [
      'mm³',
      'cm³',
      'ml',
      'cl',
      'dl',
      'l',
      'kl',
      'm³',
      'km³',
      'krm',
      'tsk',
      'msk',
      'kkp',
      'glas',
      'kanna',
      'tsp',
      'Tbs',
      'in³',
      'fl-oz',
      'cup',
      'pnt',
      'qt',
      'gal',
      'ft³',
      'yd³'
    ];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['kg possibilities'] = function () {
  var actual = convert().from('kg').possibilities(),
    expected = ['mcg', 'mg', 'g', 'kg', 'mt', 'oz', 'lb', 't'];
  assert.deepEqual(actual.sort(), expected.sort());
};
tests['m possibilities'] = function () {
  var actual = convert().from('m').possibilities(),
    expected = ['mm', 'cm', 'm', 'km', 'in', 'yd', 'ft-us', 'ft', 'CF', 'fathom', 'mi', 'nMi'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['each possibilities'] = function () {
  var actual = convert().possibilities('Each'),
    expected = ['ea', 'dz'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['mass possibilities'] = function () {
  var actual = convert().possibilities('Mass'),
    expected = ['mcg', 'mg', 'g', 'kg', 'mt', 'oz', 'lb', 't'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['volume possibilities'] = function () {
  var actual = convert().possibilities('Volume'),
    expected = [
      'mm³',
      'cm³',
      'ml',
      'cl',
      'dl',
      'l',
      'kl',
      'm³',
      'km³',
      'krm',
      'tsk',
      'msk',
      'kkp',
      'glas',
      'kanna',
      'tsp',
      'Tbs',
      'in³',
      'fl-oz',
      'cup',
      'pnt',
      'qt',
      'gal',
      'ft³',
      'yd³'
    ];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['volume flow rate possibilities'] = function () {
  var actual = convert().possibilities('VolumeFlowRate'),
    expected = [
      'mm³/s',
      'cm³/s',
      'ml/s',
      'cl/s',
      'dl/s',
      'l/s',
      'l/min',
      'l/h',
      'kl/s',
      'kl/min',
      'kl/h',
      'm³/s',
      'm³/min',
      'm³/h',
      'km³/s',
      'tsp/s',
      'Tbs/s',
      'in³/s',
      'in³/min',
      'in³/h',
      'fl-oz/s',
      'fl-oz/min',
      'fl-oz/h',
      'cup/s',
      'pnt/s',
      'pnt/min',
      'pnt/h',
      'qt/s',
      'gal/s',
      'gal/min',
      'gal/h',
      'ft³/s',
      'ft³/min',
      'CFM',
      'ft³/h',
      'yd³/s',
      'yd³/min',
      'yd³/h'
    ];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['length possibilities'] = function () {
  var actual = convert().possibilities('Length'),
    expected = ['mm', 'cm', 'm', 'km', 'in', 'yd', 'ft-us', 'ft', 'CF', 'fathom', 'mi', 'nMi'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['temperature possibilities'] = function () {
  var actual = convert().possibilities('Temperature'),
    expected = ['°C', 'K', '°F', 'R'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['time possibilities'] = function () {
  var actual = convert().possibilities('Time'),
    expected = ['ns', 'mu', 'ms', 's', 'min', 'h', 'd', 'week', 'month', 'year'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['digital possibilities'] = function () {
  var actual = convert().possibilities('Digital'),
    expected = ['b', 'Kb', 'Mb', 'Gb', 'Tb', 'B', 'KB', 'MB', 'GB', 'TB'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['partsPer possibilities'] = function () {
  var actual = convert().possibilities('PartsPer'),
    expected = ['ppm', 'ppb', 'ppt', 'ppq'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['pressure possibilities'] = function () {
  var actual = convert().possibilities('Pressure'),
    expected = ['Pa', 'kPa', 'MPa', 'hPa', 'bar', 'torr', 'psi', 'ksi', 'WC', 'ba'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['speed possibilities'] = function () {
  var actual = convert().possibilities('Speed'),
    expected = ['m/s', 'km/h', 'm/h', 'knot', 'ft/s', 'FPM', 'ft/m', 'mm/sec', 'in/s'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['pace possibilities'] = function () {
  var actual = convert().possibilities('Pace'),
    expected = ['s/m', 'min/km', 'min/mi', 's/ft'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['current possibilities'] = function () {
  var actual = convert().possibilities('Current'),
    expected = ['A', 'mA', 'kA', 'pA'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['voltage possibilities'] = function () {
  var actual = convert().possibilities('Voltage'),
    expected = ['V', 'mV', 'kV'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['power possibilities'] = function () {
  var actual = convert().possibilities('Power'),
    expected = ['W', 'mW', 'kW', 'MW', 'GW', 'HP'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['reactive power possibilities'] = function () {
  var actual = convert().possibilities('Reactive power'),
    expected = ['VAR', 'mVAR', 'kVAR', 'MVAR', 'GVAR'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['apparent power possibilities'] = function () {
  var actual = convert().possibilities('Apparent power'),
    expected = ['VA', 'mVA', 'kVA', 'MVA', 'GVA'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['energy possibilities'] = function () {
  var actual = convert().possibilities('Energy'),
    expected = ['Wh', 'mWh', 'kWh', 'MWh', 'GWh', 'J', 'kJ'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['reactive energy possibilities'] = function () {
  var actual = convert().possibilities('Reactive energy'),
    expected = ['VARh', 'mVARh', 'kVARh', 'MVARh', 'GVARh'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['reactive energy possibilities'] = function () {
  var actual = convert().possibilities('Frequency'),
    expected = ['Hz', 'mHz', 'kHz', 'MHz', 'GHz', 'THz', 'rpm', 'deg/s', 'rad/s'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['illuminance possibilities'] = function () {
  var actual = convert().possibilities('Illuminance'),
    expected = ['lx', 'ft-cd'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['angle possibilities'] = function () {
  var actual = convert().possibilities('Angle'),
    expected = ['rad', 'deg', 'grad', 'arcmin', 'arcsec'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['charge possibilities'] = function () {
  var actual = convert().possibilities('Charge'),
    expected = ['c', 'mC', 'μC', 'nC', 'pC'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['force possibilities'] = function () {
  var actual = convert().possibilities('Force'),
    expected = ['N', 'kN', 'lbf'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['acceleration possibilities'] = function () {
  var actual = convert().possibilities('Acceleration'),
    expected = ['g-force', 'm/s²'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['all possibilities'] = function () {
  var actual = convert().possibilities(),
    // Please keep these sorted for maintainability
    expected = [
      ' ',
      '#',
      '$',
      '%',
      '%',
      'A',
      'arcmin',
      'arcsec',
      'B',
      'Boolean',
      'Integer',
      'CF',
      'CFM',
      'Enum',
      'F/RH',
      'FPM',
      'Float',
      'R',
      'GB',
      'Gb',
      'HP',
      'K',
      'KB',
      'Kb',
      'MB',
      'MPa',
      'Mb',
      'N',
      'Nm',
      'Pa',
      'WC',
      'ba',
      'TB',
      'Tb',
      'ac',
      'b',
      'bar',
      'c',
      'cl',
      'cl/s',
      'cm',
      'cm²',
      'cm³',
      'cm³/s',
      'cup',
      'cup/s',
      'd',
      'deg',
      'deg/s',
      'dl',
      'dl/s',
      'ea',
      'dz',
      'fl-oz',
      'fl-oz/h',
      'fl-oz/min',
      'fl-oz/s',
      'ft-us',
      'ft',
      'fathom',
      'ft-cd',
      'ft/m',
      'ft/s',
      'ft²',
      'ft³',
      'ft³/h',
      'ft³/min',
      'ft³/s',
      'g',
      'g-force',
      'g/ft³',
      'g/m³',
      'gal',
      'gal/h',
      'gal/min',
      'gal/s',
      'glas',
      'grad',
      'GHz',
      'GVA',
      'GVAR',
      'GVARh',
      'GW',
      'GWh',
      'h',
      'hPa',
      'ha',
      'Hz',
      'in',
      'in²',
      'in³',
      'in/s',
      'in³/h',
      'in³/min',
      'in³/s',
      'J',
      'kA',
      'kPa',
      'kanna',
      'kg',
      'kkp',
      'kJ',
      'kN',
      'kl',
      'kl/h',
      'kl/min',
      'kl/s',
      'km',
      'km/h',
      'km²',
      'km³',
      'km³/s',
      'knot',
      'krm',
      'ksi',
      'kHz',
      'kV',
      'kVA',
      'kVAR',
      'kVARh',
      'kW',
      'kWh',
      'l',
      'l/h',
      'l/min',
      'l/s',
      'lb',
      'lb-ft',
      'lb/ft³',
      'lbf',
      'lx',
      'm',
      'm/h',
      'm/s',
      'm/s²',
      'm²',
      'm³',
      'm³/h',
      'm³/min',
      'm³/s',
      'mA',
      'mC',
      'mcg',
      'mg',
      'mg/m³',
      'mi',
      'mi²',
      'min',
      'min/km',
      'min/mi',
      'ml',
      'ml/s',
      'mm',
      'mm²',
      'mm³',
      'mm³/s',
      'mm/s',
      'mm/sec',
      'month',
      'ms',
      'msk',
      'mt',
      'mu',
      'nC',
      'mHz',
      'MHz',
      'mV',
      'mVA',
      'MVA',
      'Hz',
      'mVAR',
      'MVAR',
      'mVARh',
      'MVARh',
      'mW',
      'MW',
      'mWh',
      'MWh',
      'nMi',
      'ns',
      'oz',
      'pA',
      'pH',
      'pC',
      'pnt',
      'pnt/h',
      'pnt/min',
      'pnt/s',
      'ppb',
      'ppm',
      'ppq',
      'ppt',
      'psi',
      'Psig',
      'RH',
      'qt',
      'qt/s',
      'rad',
      'rad/s',
      'rpm',
      's',
      's/m',
      's/ft',
      't',
      'Tbs',
      'Tbs/s',
      'THz',
      'torr',
      'tsk',
      'tsp',
      'tsp/s',
      'V',
      'VA',
      'VAR',
      'VARh',
      'W',
      'week',
      'Wh',
      'yd',
      'yd²',
      'yd³',
      'yd³/h',
      'yd³/min',
      'yd³/s',
      'year',
      'μC',
      '°C',
      '°F',
      'μg/m³',
      'pulses/h',
      'rad/s',
      'rpm'
    ];

  try {
    assert.deepEqual(actual.sort(), expected.sort());
  } catch (e) {
    // This gets too long, and gets truncated
    process.stderr.write(e + '\n');
    throw e;
  }
};

module.exports = tests;
