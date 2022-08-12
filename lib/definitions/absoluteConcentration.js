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
