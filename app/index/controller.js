import Ember from 'ember';

export default Ember.Controller.extend({
  fiters: false,
  sortBy: {
    id: ''
  },

  count: function () {
    return this.get('sortedListings').length;
  }.property('sortedListings.@each'),

  sortByValues: [
    { id: 'price', name: 'Price' },
    { id: 'roomType', name: 'Room type' },
    { id: 'area', name: 'Area' },
    { id: 'postcode', name: 'Postcode' }
  ],

  actions: {
    filter(type, value, checked) {
      var prop = 'filtered' + Ember.String.classify(type);
      console.log(prop);
      var values = this.get(prop);
      if (checked) {
        values.removeAt(values.indexOf(value));
      } else {
        values.pushObject(value);
      }
    },

    toggleFilters() {
      this.set('filters', !this.get('filters'));
    }
  },

  coords: Ember.computed.filter('sortedListings', function (listing) {
    return listing.get('coords');
  }),
  coords2: Ember.computed.mapBy('coords', 'coords'),
  mapObjects: Ember.computed.map('coords2', function (coords) {
    return {
      lat: coords.get('lat'),
      lng: coords.get('lng')
    };
  }),

  roomTypesWithDupes: Ember.computed.mapBy('model', 'roomType'),
  roomTypes: Ember.computed.uniq('roomTypesWithDupes'),
  filteredRoomTypes: [],

  areasWithDupes: Ember.computed.mapBy('model', 'area'),
  areas: Ember.computed.uniq('areasWithDupes'),
  filteredAreas: [],

  postcodesWithDupes: Ember.computed.mapBy('model', 'postcode'),
  postcodes: Ember.computed.uniq('postcodesWithDupes'),
  filteredPostcodes: [],

  availableFromWithDupes: Ember.computed.mapBy('model', 'availableFrom'),
  availableFrom: Ember.computed.uniq('availableFromWithDupes'),
  filteredAvailableFrom: [],

  minimumTermWithDupes: Ember.computed.mapBy('model', 'minimumTerm'),
  minimumTerm: Ember.computed.uniq('minimumTermWithDupes'),
  filteredMinimumTerm: [],

  maximumTermWithDupes: Ember.computed.mapBy('model', 'maximumTerm'),
  maximumTerm: Ember.computed.uniq('maximumTermWithDupes'),
  filteredMaximumTerm: [],

  furnishedWithDupes: Ember.computed.mapBy('model', 'furnished'),
  furnished: Ember.computed.uniq('furnishedWithDupes'),
  filteredFurnished: [],

  parkingWithDupes: Ember.computed.mapBy('model', 'parking'),
  parking: Ember.computed.uniq('parkingWithDupes'),
  filteredParking: [],

  garageWithDupes: Ember.computed.mapBy('model', 'garage'),
  garage: Ember.computed.uniq('garageWithDupes'),
  filteredGarage: [],

  gardenOrTerraceWithDupes: Ember.computed.mapBy('model', 'gardenOrTerrace'),
  gardenOrTerrace: Ember.computed.uniq('gardenOrTerraceWithDupes'),
  filteredGardenOrTerrace: [],

  balconyWithDupes: Ember.computed.mapBy('model', 'balcony'),
  balcony: Ember.computed.uniq('balconyWithDupes'),
  filteredBalcony: [],

  disabledAccessWithDupes: Ember.computed.mapBy('model', 'disabledAccess'),
  disabledAccess: Ember.computed.uniq('disabledAccessWithDupes'),
  filteredDisabledAccess: [],

  sortedListings: function () {
    var model = this.get('model');
    var sortBy = this.get('sortBy').id;
    return model.filter((listing) => {
      return !this.get('filteredRoomTypes').contains(listing.get('roomType')) &&
        !this.get('filteredAreas').contains(listing.get('area')) &&
        !this.get('filteredPostcodes').contains(listing.get('postcode')) &&
        !this.get('filteredAvailableFrom').contains(listing.get('availableFrom')) &&
        !this.get('filteredMinimumTerm').contains(listing.get('minimumTerm')) &&
        !this.get('filteredMaximumTerm').contains(listing.get('maximumTerm')) &&
        !this.get('filteredFurnished').contains(listing.get('furnished')) &&
        !this.get('filteredParking').contains(listing.get('parking')) &&
        !this.get('filteredGarage').contains(listing.get('garage')) &&
        !this.get('filteredGardenOrTerrace').contains(listing.get('gardenOrTerrace')) &&
        !this.get('filteredBalcony').contains(listing.get('balcony')) &&
        !this.get('filteredDisabledAccess').contains(listing.get('disabledAccess'));
    }).sortBy(sortBy);
  }.property('model', 'sortBy',
      'filteredRoomTypes.@each',
      'filteredAreas.@each',
      'filteredPostcodes.@each',
      'filteredAvailableFrom.@each',
      'filteredMinimumTerm.@each',
      'filteredMaximumTerm.@each',
      'filteredFurnished.@each',
      'filteredParking.@each',
      'filteredGarage.@each',
      'filteredGardenOrTerrace.@each',
      'filteredBalcony.@each',
      'filteredDisabledAccess.@each'
  ),
});
