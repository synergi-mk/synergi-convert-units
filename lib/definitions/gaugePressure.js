var metric;

metric = {
  'PSig': {
    name: {
      singular: 'Pound per square inch in gauge'
      , plural: 'Pounds per square inch in gauge'
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

