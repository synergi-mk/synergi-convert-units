var metric, imperial;

metric = {
  Pa: {
    name: {
      singular: 'pascal',
      plural: 'pascals'
    },
    to_anchor: 1 / 1000
  },
  kPa: {
    name: {
      singular: 'kilopascal',
      plural: 'kilopascals'
    },
    to_anchor: 1
  },
  MPa: {
    name: {
      singular: 'megapascal',
      plural: 'megapascals'
    },
    to_anchor: 1000
  },
  hPa: {
    name: {
      singular: 'hectopascal',
      plural: 'hectopascals'
    },
    to_anchor: 1 / 10
  },
  ba: {
    name: {
      singular: 'barye',
      plural: 'barye'
    },
    to_anchor: 1 / 10000
  },
  mbar: {
    name: {
      singular: 'milibar',
      plural: 'milibar'
    },
    to_anchor: 1/10
  },
  bar: {
    name: {
      singular: 'bar',
      plural: 'bar'
    },
    to_anchor: 100
  },
  torr: {
    name: {
      singular: 'torr',
      plural: 'torr'
    },
    to_anchor: 101325 / 760000
  }
};

imperial = {
  psi: {
    name: {
      singular: 'pound per square inch',
      plural: 'pounds per square inch'
    },
    to_anchor: 1 / 1000
  },
  ksi: {
    name: {
      singular: 'kilopound per square inch',
      plural: 'kilopound per square inch'
    },
    to_anchor: 1
  },
  'in.wg.': {
    name: {
      singular: 'inch water gauge',
      plural: 'inches water gauge'
    },
    to_anchor: 1 / 27680
  },
  'WC': {
    name: {
      singular: 'inch water column',
      plural: 'inches water column'
    },
    to_anchor: 1 / 27680
  }
};

module.exports = {
  metric: metric,
  imperial: imperial,
  _anchors: {
    metric: {
      unit: 'kPa',
      ratio: 0.00014503768078
    },
    imperial: {
      unit: 'psi',
      ratio: 1 / 0.00014503768078
    }
  }
};
