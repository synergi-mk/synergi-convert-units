var metric;

metric = {
  ' ': {
    name: {
      singular: 'Pound per square inch in gauge'
      , plural: 'Pounds per square inch in gauge'
    }
    , to_anchor: 1
  }, '%': {
    name: {
      singular: 'Percentage'
      , plural: 'Percentages'
    }
    , to_anchor: 1
  }

};

module.exports = {
  metric: metric

  , _anchors: {
    metric: {
      unit: '%'
      , ratio: 1
    }
  }
};

