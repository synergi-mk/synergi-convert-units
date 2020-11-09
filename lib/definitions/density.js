var metric, imperial;

metric = {
  'μg/m³': {
    name: {
      singular: 'Micro gram per cubic meter',
      plural: 'Micro grams per cubic meter'
    },
    to_anchor: 1 / 1000000
  },
  'mg/m³': {
    name: {
      singular: 'Mili gram per cubic meter',
      plural: 'Mili grams per cubic meter'
    },
    to_anchor: 1 / 1000
  },
  'g/m³': {
    name: {
      singular: 'Gram per cubic meter',
      plural: 'Grams per cubic meter'
    },
    to_anchor: 1
  }
};
imperial = {
  'g/ft³': {
    name: {
      singular: 'Gram per cubic foot',
      plural: 'Gram per cubic foot'
    },
    to_anchor: 1
  },
  'lb/ft³': {
    name: {
      singular: 'Pound per cubic foot',
      plural: 'Pounds per cubic foot'
    },
    to_anchor: 1 / 0.00220462262
  }
};
module.exports = {
  metric: metric,
  imperial: imperial,
  _anchors: {
    metric: {
      unit: 'g/m³',
      ratio: 0.0283168
    },
    imperial: {
      unit: 'g/ft³',
      ratio: 1 / 0.0283168
    }
  }
};
