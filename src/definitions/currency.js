var metric;

metric = {
  $: {
    name: {
      singular: 'Dollar',
      plural: 'Dollars'
    },
    to_anchor: 1
  }
};

module.exports = {
  metric: metric,

  _anchors: {
    metric: {
      unit: '$',
      ratio: 1
    }
  }
};
