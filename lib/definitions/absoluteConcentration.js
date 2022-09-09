var metric;

metric = {
  'mg/m³': {
    name: {
      singular: 'Miligram per metric cubic',
      plural: 'Miligrams per metric cubic'
    },
    to_anchor: 1
  },  
  'mg/Nm³': {
    name: {
      singular: 'Miligram per metric cubic',
      plural: 'Miligrams per metric cubic'
    },
    to_anchor: 1
  },
  'mbar³': {
    name: {
      singular: 'Milibar pressure unit',
      plural: 'Milibars pressure unit'
    },
    to_anchor: 1
  },
  'm³/sec': {
    name: {
      singular: 'Cubic metre per second',
      plural: 'Cubic metres per second'
    },
    to_anchor: 1
  },
  '°C': {
    name: {
      singular: 'Degree Celsius',
      plural: 'Degrees Celsius'
    },
    to_anchor: 1
  },
  'V': {
    name: {
      singular: 'Volume',
      plural: 'Volumes'
    },
    to_anchor: 1
  },
  'DU': {
    name: {
      singular: 'Dobson unit',
      plural: 'Dobson units'
    },
    to_anchor: 1
  }
};
module.exports = {
  metric: metric,

  _anchors: {
    metric: {
      unit: 'mg/m³',
      ratio: 1
    }
  }
};
