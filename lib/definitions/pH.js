var metric;

metric = {
  pH: {
    name: {
      singular: 'Power of Hidrogen',
      plural: 'Power of Hidrogen'
    },
    to_anchor: 1
  }
};

module.exports = {
  metric: metric,

  _anchors: {
    metric: {
      unit: 'pH',
      ratio: 1
    }
  }
};
