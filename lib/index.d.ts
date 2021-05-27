declare module 'convert-units' {
  type uDistance = 'mm' | 'cm' | 'm' | 'km' | 'in' | 'ft-us' | 'ft' | 'mi'; // Distance
  type uArea = 'mm²' | 'cm²' | 'm²' | 'ha' | 'km²' | 'in²' | 'ft²' | 'ac' | 'mi²'; // Area
  type uMass = 'mcg' | 'mg' | 'g' | 'kg' | 'oz' | 'lb' | 'mt' | 't'; // Mass
  type uVolume =
    | 'mm³'
    | 'cm³'
    | 'ml'
    | 'l'
    | 'kl'
    | 'm³'
    | 'km³'
    | 'tsp'
    | 'Tbs'
    | 'in³'
    | 'fl-oz'
    | 'cup'
    | 'pnt'
    | 'qt'
    | 'gal'
    | 'ft³'
    | 'yd³'; // Volume
  type uVolumeFlowRate =
    | 'mm³/s'
    | 'cm³/s'
    | 'ml/s'
    | 'cl/s'
    | 'dl/s'
    | 'l/s'
    | 'l/min'
    | 'l/h'
    | 'kl/s'
    | 'kl/min'
    | 'kl/h'
    | 'm³/s'
    | 'm³/min'
    | 'm³/h'
    | 'km³/s'
    | 'tsp/s'
    | 'Tbs/s'
    | 'in³/s'
    | 'in³/min'
    | 'in³/h'
    | 'fl-oz/s'
    | 'fl-oz/min'
    | 'fl-oz/h'
    | 'cup/s'
    | 'pnt/s'
    | 'pnt/min'
    | 'pnt/h'
    | 'qt/s'
    | 'gal/s'
    | 'gal/min'
    | 'gal/h'
    | 'ft³/s'
    | 'ft³/min'
    | 'ft³/h'
    | 'yd³/s'
    | 'yd³/min'
    | 'yd³/h'; // Volume Flow Rate
  type uTemperature = 'C' | 'F' | 'K' | 'R'; // Temperature
  type uTime = 'ns' | 'mu' | 'ms' | 's' | 'min' | 'h' | 'd' | 'week' | 'month' | 'year'; // Time
  type uFrequency = 'Hz' | 'mHz' | 'kHz' | 'MHz' | 'GHz' | 'THz' | 'rpm' | 'deg/s' | 'rad/s'; // Frequency
  type uSpeed = 'm/s' | 'km/h' | 'm/h' | 'knot' | 'ft/s'; // Speed
  type uPace = 's/m' | 'min/km' | 's/ft' | 'min/km'; // Pace
  type uPressure = 'Pa' | 'hPa' | 'kPa' | 'MPa' | 'bar' | 'mbar' |  'torr' | 'psi' | 'ksi'; // Pressure
  type uDitgital = 'b' | 'Kb' | 'Mb' | 'Gb' | 'Tb' | 'B' | 'KB' | 'MB' | 'GB' | 'TB'; // Digital
  type uEach = 'ea' | 'dz';
  type uIlluminance = 'lx' | 'ft-cd'; // Illumunance
  type uPartsPer = 'ppm' | 'ppb' | 'ppt' | 'ppq'; // Parts-Per
  type uVoltage = 'V' | 'mV' | 'kV'; // Voltage
  type uCurrent = 'A' | 'mA' | 'pA' | 'kA'; // Current
  type uPower = 'W' | 'mW' | 'kM' | 'MW' | 'GW' | 'HP';
  type uApparentPower = 'VA' | 'mVA' | 'kVA' | 'MVA' | 'GVA'; // Apparent Power
  type uReactivePower = 'VAR' | 'mVAR' | 'kVAR' | 'MVAR' | 'GVAR'; // Reactive Power
  type uEnergy = 'Wh' | 'mWh' | 'kWh' | 'MWh' | 'GWh' | 'J' | 'kJ'; // Energy
  type uReactiveEnergy = 'VARh' | 'mVARh' | 'kVARh' | 'MVARh' | 'GVARH'; // Reactive Energy
  type uAngle = 'deg' | 'rad' | 'grad' | 'arcmin' | 'arcsec'; // Angle
  type uVibration = 'mm/s'; // Vibration
  type uDensity = 'mg/m³' | 'g/m³' | 'g/ft³' | 'lb/ft³'; // Density
  type uHumidity = 'F/RH'; // Humidity
  type uRelativeHumidity = 'RH'; // Relative Humidity
  type uTorque = 'Nm' | 'lb-ft'; // Torque
  type uGaugePressure = 'PSig'; // Gauge Pressure
  type uCurrency = '$'; // Currency
  type uPercentage = '%'; // Percentage
  type uPulseFrequency = 'pulses/h'; // Pulse Frequency
  type uData = ' ' | '%'; // Data
  type uRotationalSpeed = 'Hz' | 'rpm' | 'rad/s'; // Rotational speed
  type uScalar = 'Float' | 'Integer' | 'Boolean' | 'Enum'; // Rotational speed
  type uPH = 'pH';

  type unit =
    | uDistance
    | uArea
    | uMass
    | uVolume
    | uVolumeFlowRate
    | uTemperature
    | uTime
    | uFrequency
    | uSpeed
    | uPace
    | uPressure
    | uDitgital
    | uIlluminance
    | uPartsPer
    | uVoltage
    | uCurrent
    | uPower
    | uApparentPower
    | uReactivePower
    | uEnergy
    | uReactiveEnergy
    | uAngle
    | uVibration
    | uDensity
    | uHumidity
    | uRelativeHumidity
    | uTorque
    | uGaugePressure
    | uCurrency
    | uPercentage
    | uPulseFrequency
    | uData
    | uRotationalSpeed
    | uScalar
    | uPH
    | uEach;

  type measure =
    | 'distance'
    | 'area'
    | 'mass'
    | 'volume'
    | 'volumeFlowRate'
    | 'temperature'
    | 'time'
    | 'frequency'
    | 'speed'
    | 'pace'
    | 'pressure'
    | 'ditgital'
    | 'illuminance'
    | 'partsPer'
    | 'voltage'
    | 'current'
    | 'power'
    | 'apparentPower'
    | 'reactivePower'
    | 'energy'
    | 'reactiveEnergy'
    | 'angle'
    | 'vibration'
    | 'density'
    | 'humidity'
    | 'force'
    | 'relativeHumidity'
    | 'torque'
    | 'Gauge pressure'
    | 'Currency'
    | 'Percentage'
    | 'Pulse Frequency'
    | 'Data'
    | 'Rotational speed'
    | 'Scalar'
    | 'charge'
    | 'pH';

  type system = 'metric' | 'imperial' | 'bits' | 'bytes';

  class Convert {
    constructor(numerator: number, denominator?: number);
    from(from: unit | string): this;
    to(to: unit | string): number;
    toBest(options?: {
      exclude?: unit[];
      cutOffNumber?: number;
    }): { val: number; unit: string; singular: string; plural: string };
    checkUnitMeasurement(checkUnit: string, checkMeasure: string): boolean;
    getUnit<T extends unit>(
      abbr: T | string
    ): {
      abbr: T;
      measure: measure;
      system: system;
      unit: { name: { singular: string; plural: string }; to_anchor: number };
    };
    describe<T extends unit>(
      abbr: T | string
    ): {
      abbr: T;
      measure: measure;
      system: system;
      singular: string;
      plural: string;
    };
    singleSystem<T extends unit>(abbr: T | string): any;
    list(measure?: measure | string): unit[];
    private throwUnsupportedUnitError(what: string): void;
    possibilities(measure?: measure | string): unit[];
    possibility(originSystem: string): unit[];
    measures(): measure[];
  }

  function convert(value?: number): Convert;

  export = convert;
}
