import DS from 'ember-data';

export default DS.Model.extend({
  time: DS.attr('unix-timestamp'),
  summary: DS.attr('string'),
  icon: DS.attr('string'),
  sunriseTime: DS.attr('unix-timestamp'),
  sunsetTime: DS.attr('unix-timestamp'),
  moonPhase: DS.attr('number'),
  nearestStormDistance: DS.attr('number'),
  nearestStormBearing: DS.attr('number'),
  precipIntensity: DS.attr('number'),
  precipIntensityMax: DS.attr('number'),
  precipIntensityMaxTime: DS.attr('unix-timestamp'),
  precipProbability: DS.attr('number'),
  precipType: DS.attr('string'),
  precipAccumulation: DS.attr('number'),
  temperature: DS.attr('number'),
  temperatureMin: DS.attr('number'),
  temperatureMinTime: DS.attr('unix-timestamp'),
  temperatureMax: DS.attr('number'),
  temperatureMaxTime: DS.attr('unix-timestamp'),
  apparentTemperature: DS.attr('number'),
  apparentTemperatureMin: DS.attr('number'),
  apparentTemperatureMinTime: DS.attr('unix-timestamp'),
  apparentTemperatureMax: DS.attr('number'),
  apparentTemperatureMaxTime: DS.attr('unix-timestamp'),
  dewPoint: DS.attr('number'),
  windSpeed: DS.attr('number'),
  windBearing: DS.attr('number'),
  cloudCover: DS.attr('number'),
  humidity: DS.attr('number'),
  pressure: DS.attr('number'),
  visibility: DS.attr('number'),
  ozone: DS.attr('number')
});
