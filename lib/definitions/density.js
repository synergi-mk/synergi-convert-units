var metric,
  imperial;

metric = {
  'mg/m3': {
    name: {
      singular: 'Mili gram per cubic meter'
      , plural: 'Mili grams per cubic meter'
    }
    , to_anchor: 1 / 1000
  }
  , 'g/m3': {
    name: {
      singular: 'Gram per cubic meter'
      , plural: 'Grams per cubic meter'
    }
    , to_anchor: 1
  }

};
imperial = {
  'g/ft3': {
    name: {
      singular: 'Gram per cubic foot'
      , plural: 'Gram per cubic foot'
    }
    , to_anchor: 1
  }, 'lb/ft3': {
    name: {
      singular: 'Pound per cubic foot'
      , plural: 'Pounds per cubic foot'
    }
    , to_anchor: 1 / 0.00220462262
  }

};
module.exports = {
  metric: metric
  , imperial: imperial
  , _anchors: {
    metric: {
      unit: 'g/m3'
      , ratio: 0.0283168
    }, imperial: {
      unit: 'g/ft3'
      , ratio: 1 / 0.0283168
    }

  }
};

