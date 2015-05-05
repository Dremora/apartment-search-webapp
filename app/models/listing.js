import DS from 'ember-data';

export default DS.Model.extend({
  area: DS.attr('string'),
  postcode: DS.attr('string'),
  roomType: DS.attr('string'),
  price: DS.attr('number'),
  description: DS.attr('string'),
  availableFrom: DS.attr('string'),
  minimumTerm: DS.attr('string'),
  maximumTerm: DS.attr('string'),
  furnished: DS.attr('string'),
  parking: DS.attr('string'),
  garage: DS.attr('string'),
  gardenOrTerrace: DS.attr('string'),
  balcony: DS.attr('string'),
  disabledAccess: DS.attr('string'),
  title: DS.attr('string'),

  coords: DS.hasOneFragment('listing-coordinates'),
  photos: DS.hasManyFragments(),
});
