var metric, imperial;

metric = {
  Nm: {
    name: {
      singular: 'Newton metre',
      plural: 'Newtons metre'
    },
    to_anchor: 1
  }
};
imperial = {
  'lb-ft': {
    name: {
      singular: 'Pound-force foot',
      plural: 'Pounds-force foot'
    },
    to_anchor: 1
  }
};
module.exports = {
  metric: metric,
  imperial: imperial,
  _anchors: {
    metric: {
      unit: 'Nm',
      ratio: 1.35582
    },
    imperial: {
      unit: 'lb-ft',
      ratio: 1 / 1.35582
    }
  }
};
