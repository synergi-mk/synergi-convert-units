var metric;

metric = {
  RH: {
    name: {
      singular: 'Relative Humidity',
      plural: 'Relative Humidity'
    },
    to_anchor: 1
  }
};

module.exports = {
  metric: metric,

  _anchors: {
    metric: {
      unit: 'RH',
      ratio: 1
    }
  }
};
