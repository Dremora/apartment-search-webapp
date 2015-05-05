import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').find('listing');
  },

  setupController(controller, model) {
    controller.set('model', model);
  }
});
