var metric;

metric = {
  '%': {
    name: {
      singular: 'Percentage',
      plural: 'Percentages'
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
