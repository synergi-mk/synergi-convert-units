var metric
  , imperial;

metric = {
  'mm²': {
    name: {
      singular: 'Square Millimeter'
      , plural: 'Square Millimeters'
    }
    , to_anchor: 1 / 1000000
  }
  , 'cm²': {
    name: {
      singular: 'Centimeter'
      , plural: 'Centimeters'
    }
    , to_anchor: 1 / 10000
  }
  , 'm²': {
    name: {
      singular: 'Square Meter'
      , plural: 'Square Meters'
    }
    , to_anchor: 1
  }
  , ha: {
    name: {
      singular: 'Hectare'
      , plural: 'Hectares'
    }
    , to_anchor: 10000
  }
  , 'km²': {
    name: {
      singular: 'Square Kilometer'
      , plural: 'Square Kilometers'
    }
    , to_anchor: 1000000
  }
};

imperial = {
  'in²': {
    name: {
      singular: 'Square Inch'
      , plural: 'Square Inches'
    }
    , to_anchor: 1 / 144
  }
  , 'yd²': {
    name: {
      singular: 'Square Yard'
      , plural: 'Square Yards'
    }
    , to_anchor: 9
  }
  , 'ft²': {
    name: {
      singular: 'Square Foot'
      , plural: 'Square Feet'
    }
    , to_anchor: 1
  }
  , ac: {
    name: {
      singular: 'Acre'
      , plural: 'Acres'
    }
    , to_anchor: 43560
  }
  , 'mi²': {
    name: {
      singular: 'Square Mile'
      , plural: 'Square Miles'
    }
    , to_anchor: 27878400
  }
};

module.exports = {
  metric: metric
  , imperial: imperial
  , _anchors: {
    metric: {
      unit: 'm²'
      , ratio: 10.7639
    }
    , imperial: {
      unit: 'ft²'
      , ratio: 1 / 10.7639
    }
  }
};
