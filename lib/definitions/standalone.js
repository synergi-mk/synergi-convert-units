var metric;

metric = {
  'PSig': {
    name: {
      singular: 'Pound per square inch in gauge'
      , plural: 'Pounds per square inch in gauge'
    }
    , to_anchor: 1
  }, '$': {
    name: {
      singular: 'Dollar'
      , plural: 'Dollars'
    }
    , to_anchor: 1
  }, '%': {
    name: {
      singular: 'Percentage'
      , plural: 'Percentages'
    }
    , to_anchor: 1
  }, 'pulses/h': {
    name: {
      singular: 'Pulse per hour'
      , plural: 'Pulses per hour'
    }
    , to_anchor: 1
  }

};

module.exports = {
  metric: metric

  , _anchors: {
    metric: {
      unit: 'Psig'
      , ratio: 1
    }
  }
};

