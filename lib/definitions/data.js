var metric;

metric = {
  '#': {
    name: {
      singular: 'Numerical value'
      , plural: 'Numericla values'
    }
    , to_anchor: 1
  },
  ' ': {
    name: {
      singular: 'Empty unit'
      , plural: 'Empty units'
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

