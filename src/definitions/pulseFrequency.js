var metric;

metric = {
  'pulses/h': {
    name: {
      singular: 'Pulse per hour',
      plural: 'Pulses per hour'
    },
    to_anchor: 1
  }
};

module.exports = {
  metric: metric,

  _anchors: {
    metric: {
      unit: 'pulses/h',
      ratio: 1
    }
  }
};
