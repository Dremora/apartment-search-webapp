import DS from 'ember-data';

export default DS.ModelFragment.extend({
  lat: DS.attr('string'),
  lng: DS.attr('string')
});