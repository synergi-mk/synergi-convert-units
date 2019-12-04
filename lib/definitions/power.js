var power;

power = {
  W: {
    name: {
      singular: 'Watt'
      , plural: 'Watts'
    }
    , to_anchor: 1
  }
  , mW: {
    name: {
      singular: 'Milliwatt'
      , plural: 'Milliwatts'
    }
    , to_anchor: .001
  }
  , kW: {
    name: {
      singular: 'Kilowatt'
      , plural: 'Kilowatts'
    }
    , to_anchor: 1000
  }
  , MW: {
    name: {
      singular: 'Megawatt'
      , plural: 'Megawatts'
    }
    , to_anchor: 1000000
  }
  , GW: {
    name: {
      singular: 'Gigawatt'
      , plural: 'Gigawatts'
    }
    , to_anchor: 1000000000
  }, hp: {
    name: {
      singular: 'Horse Power'
      , plural: 'Horse Power'
    }
    , to_anchor: 1 / 0.00134102
  }

};

module.exports = {
  metric: power

  , _anchors: {
    metric: {
      unit: 'W'
      , ratio: 1
    }

  }
};
