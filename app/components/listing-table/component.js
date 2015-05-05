import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sortBy(by) {
      this.sendAction('sortBy', by);
    },

    star(listing) {
      listing.set('starred', !listing.get('starred'));
    }
  }
});
