var metric;

metric = {
  'F/RH': {
    name: {
      singular: 'Function of Relative Humidity'
      , plural: 'Function of Relative Humidity'
    }
    , to_anchor: 1
  }

};

module.exports = {
  metric: metric

  , _anchors: {
    metric: {
      unit: 'F/RH'
      , ratio: 1
    }
  }
};

