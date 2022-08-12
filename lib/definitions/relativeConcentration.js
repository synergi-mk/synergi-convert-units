var metric;

metric = {
  '%': {
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
  ppb: {
    name: {
      singular: 'Parts per billion',
      plural: 'Parts per billions'
    },
    to_anchor: 1
  }
};

module.exports = {
  metric: metric,

  _anchors: {
    metric: {
      unit: '%',
      ratio: 1
    }
  }
};
