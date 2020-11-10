var metric;

metric = {
  'mm/s': {
    name: {
      singular: 'Milimeter per second',
      plural: 'Milipeters per second'
    },
    to_anchor: 1
  }
};

module.exports = {
  metric: metric,

  _anchors: {
    metric: {
      unit: 'mm/s',
      ratio: 1
    }
  }
};
