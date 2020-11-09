var metric;

metric = {
  Float: {
    name: {
      singular: 'Float',
      plural: 'Float'
    },
    to_anchor: 1
  },
  Integer: {
    name: {
      singular: 'Integer',
      plural: 'Integer'
    },
    to_anchor: 1
  },
  Boolean: {
    name: {
      singular: 'Boolean',
      plural: 'Boolean'
    },
    to_anchor: 1
  },
  Enum: {
    name: {
      singular: 'Enumeration',
      plural: 'Enumerations'
    },
    to_anchor: 1
  }
};

module.exports = {
  metric: metric,

  _anchors: {
    metric: {
      unit: 'Float',
      ratio: 1
    }
  }
};
