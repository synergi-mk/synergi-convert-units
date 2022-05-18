var metric;

metric = {
  'vol-%': {
    name: {
      singular: 'Percentage of volume',
      plural: 'Percentages of volume'
    },
    to_anchor: 1
  },
  ppm: {
    name: {
      singular: 'Parts per million',
      plural: 'Parts per millions'
    },
    to_anchor: 1
  },  
  'mg/m³': {
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
      unit: 'vol-%',
      ratio: 1
    }
  }
};
