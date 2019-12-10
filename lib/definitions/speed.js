var metric
  , imperial;

metric = {
  'm/s': {
    name: {
      singular: 'Metre per second'
      , plural: 'Metres per second'
    }
    , to_anchor: 3.6
  }
  , 'km/h': {
    name: {
      singular: 'Kilometre per hour'
      , plural: 'Kilometres per hour'
    }
    , to_anchor: 1
  }
  , 'mm/sec': {
    name: {
      singular: 'Milimeter per second'
      , plural: 'Milipeters per second'
    }
    , to_anchor: 277.7777778
  }
}

imperial = {
  'm/h': {
    name: {
      singular: 'Mile per hour'
      , plural: 'Miles per hour'
    }
    , to_anchor: 1
  },
  'in/s': {
    name: {
      singular: 'Inch per second'
      , plural: 'Inches per second'
    }
    , to_anchor: 1 / 17.6
  }
  , knot: {
    name: {
      singular: 'Knot'
      , plural: 'Knots'
    }
    , to_anchor: 1.150779
  }
  , 'ft/m': {
    name: {
      singular: 'Foot per minute'
      , plural: 'Feet per minute'
    }
    , to_anchor: 88
  }, 'FPM': {
    name: {
      singular: 'Foot per minute'
      , plural: 'Feet per minute'
    }
    , to_anchor: 88
  }
  , 'ft/s': {
    name: {
      singular: 'Foot per second'
      , plural: 'Feet per second'
    }
    , to_anchor: 0.681818
  }
};

module.exports = {
  metric: metric
  , imperial: imperial
  , _anchors: {
    metric: {
      unit: 'km/h'
      , ratio: 1 / 1.609344
    }
    , imperial: {
      unit: 'm/h'
      , ratio: 1.609344
    }
  }
};
