var metric;

metric = {
  Hz: {
    name: {
      singular: 'hertz'
      , plural: 'hertz'
    }
    , to_anchor: 1
  },
  rpm: {
    name: {
      singular: 'rotation per minute'
      , plural: 'rotations per minute'
    }
    , to_anchor: 1 / 60
  }, "rad/s": {
    name: {
      singular: 'radian per second'
      , plural: 'radians per second'
    }
    , to_anchor: 1 / (Math.PI * 2)
  }
};

module.exports = {
  metric: metric

  , _anchors: {
    metric: {
      unit: 'Hz'
      , ratio: 1
    }
  }
};

